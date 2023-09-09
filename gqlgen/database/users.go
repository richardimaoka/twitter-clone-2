package database

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
)

type User struct {
	UserName       string `firestore:"userName"`
	UserId         string `firestore:"userId"`
	ProfilePicture string `firestore:"profilePicture"`
}

// Get user from firestore
func GetUserFromFirestore(ctx context.Context, client *firestore.Client, userId string) (*User, error) {
	userRef := client.Doc("users/" + userId)

	docSnap, err := userRef.Get(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to get user: %v", err)
	}

	var user User
	err = docSnap.DataTo(&user)
	if err != nil {
		return nil, fmt.Errorf("failed to convert user: %v", err)
	}

	return &user, nil
}
