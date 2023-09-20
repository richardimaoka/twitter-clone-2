package auth

import (
	"context"
	"log"
	"net/http"

	"cloud.google.com/go/firestore"
	"firebase.google.com/go/v4/auth"

	"github.com/richardimaoka/twitter-clone-2/gqlgen/database"
)

// A private key for context that only this package can access. This is important
// to prevent collisions between different context uses
var userCtxKey = &contextKey{"user"}

type contextKey struct {
	name string
}

// A stand-in for our database backed user object
type User struct {
	Name    string
	IsAdmin bool
}

// https://firebase.google.com/docs/auth/admin/manage-cookies#go_2
func validateAndGetUserID(ctx context.Context, authClient *auth.Client, sessionCookie string) (string, error) {
	// Verify the session cookie. In this case an additional check is added to detect
	// if the user's Firebase session was revoked, user deleted/disabled, etc.
	log.Println("verifying user's session cookie")
	decoded, err := authClient.VerifySessionCookieAndCheckRevoked(ctx, sessionCookie)
	if err != nil {
		return "", err
	}

	return decoded.UID, nil
}

func findUser(r *http.Request, dbClient *firestore.Client, authClient *auth.Client) *User {
	c, err := r.Cookie("session")
	if err != nil {
		log.Println("no session cookie, so no user")
		return nil
	}

	// error from this includes session cookie expiration
	userId, err := validateAndGetUserID(r.Context(), authClient, c.Value)
	if err != nil {
		log.Println("failed to validate and get user ID, so no user.", err)
		return nil
	}

	// get the user from the database
	log.Println("getting user info from Firestore")
	user, err := database.GetUser(r.Context(), dbClient, userId)
	if err != nil {
		log.Printf("failed get user for id = %s from DB, so no user. %v", userId, err)
		log.Printf("but force setting user = richardimaokajp")
		return &User{
			Name:    "richardimaokajp",
			IsAdmin: false,
		}
		//return nil
	}

	return &User{
		Name:    user.UserName,
		IsAdmin: false,
	}
}

// Middleware decodes the share session cookie and packs the session into context
func Middleware(dbClient *firestore.Client, authClient *auth.Client) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			log.Println("user authentication starts")
			// get the user
			user := findUser(r, dbClient, authClient)

			// put it in context
			if user != nil {
				ctx := context.WithValue(r.Context(), userCtxKey, user)
				r = r.WithContext(ctx)
			}

			// and call the next with our new context
			next.ServeHTTP(w, r)
		})
	}
}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx context.Context) *User {
	raw, _ := ctx.Value(userCtxKey).(*User)
	return raw
}
