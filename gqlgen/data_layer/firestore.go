package data_layer

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
)

type FireStore struct {
	client *firestore.Client
}

func (f *FireStore) GetUser(ctx context.Context, userId string) (*User, error) {
	userRef := f.client.Doc("users/" + userId)

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
