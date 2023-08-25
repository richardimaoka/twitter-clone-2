package graph

import (
	"context"
	"fmt"
	"net/http"
)

var userCtxKey = &contextKey{"user"}

type contextKey struct {
	name string
}

type User struct {
	Name string
}

// Middleware decodes the share session cookie and packs the session into context
func AuthMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		cookie := r.Cookies()

		fmt.Println("-----\n", r.Method, cookie, r.UserAgent(), "\n-----")
		// c, err := r.Cookie("auth-cookie")

		// // Allow unauthenticated users in
		// if err != nil || c == nil {
		// 	next.ServeHTTP(w, r)
		// 	return
		// }

		// userId, err := validateAndGetUserID(c)
		// if err != nil {
		// 	http.Error(w, "Invalid cookie", http.StatusForbidden)
		// 	return
		// }

		// // get the user from the database
		// user := getUserByID(db, userId)

		// // put it in context
		// ctx := context.WithValue(r.Context(), userCtxKey, user)

		// // and call the next with our new context
		// r = r.WithContext(ctx)
		next.ServeHTTP(w, r)
	})

}

// ForContext finds the user from the context. REQUIRES Middleware to have run.
func ForContext(ctx context.Context) *User {
	raw, _ := ctx.Value(userCtxKey).(*User)
	return raw
}
