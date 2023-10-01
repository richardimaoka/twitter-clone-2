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

func (f *FireStore) GetTweet(ctx context.Context, tweetId string) (*Tweet, error) {
	tweetRef := f.client.Doc("tweets/" + tweetId)

	docSnap, err := tweetRef.Get(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to get tweet: %v", err)
	}

	var tweet Tweet
	err = docSnap.DataTo(&tweet)
	if err != nil {
		return nil, fmt.Errorf("failed to convert tweet: %v", err)
	}

	return &tweet, nil
}
