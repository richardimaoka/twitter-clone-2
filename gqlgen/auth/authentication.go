package auth

import (
	"context"
	"fmt"
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

func validateAndGetUserID(ctx context.Context, authClient *auth.Client, idToken string) (string, error) {
	token, err := authClient.VerifyIDToken(ctx, idToken)
	if err != nil {
		log.Fatalf("error verifying ID token: %v\n", err)
		return "", fmt.Errorf("invalid credentials")
	}

	log.Printf("Verified ID token: %v\n", token)
	return "", nil
}

// Middleware decodes the share session cookie and packs the session into context
func AuthMiddleware(dbClient *firestore.Client, authClient *auth.Client) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			c, err := r.Cookie("auth-cookie")
			if err != nil {
				http.Error(w, "Invalid cookie", http.StatusForbidden)
				return
			}

			userId, err := validateAndGetUserID(r.Context(), authClient, c.Value)
			if err != nil {
				http.Error(w, "Invalid cookie", http.StatusForbidden)
				return
			}

			// get the user from the database
			user, err := database.GetUser(r.Context(), dbClient, userId)

			// put it in context
			ctx := context.WithValue(r.Context(), userCtxKey, user)

			// and call the next with our new context
			r = r.WithContext(ctx)
			next.ServeHTTP(w, r)
		})
	}
}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx context.Context) *User {
	raw, _ := ctx.Value(userCtxKey).(*User)
	return raw
}
