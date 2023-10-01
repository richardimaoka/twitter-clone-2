package data_layer

import (
	"context"
	"encoding/json"
	"fmt"
	"os"

	"cloud.google.com/go/firestore"
)

type FileLayer struct {
	client *firestore.Client
}

func (f *FileLayer) GetUser(ctx context.Context, userId string) (*User, error) {
	filePath := "data/user.json"

	bytes, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var user User
	err = json.Unmarshal(bytes, &user)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal %s, %s", filePath, err)
	}

	return &user, nil
}

func (f *FileLayer) GetTweet(ctx context.Context, tweetId string) (*Tweet, error) {
	filePath := "data/tweet.json"

	bytes, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var tweet Tweet
	err = json.Unmarshal(bytes, &tweet)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal %s, %s", filePath, err)
	}

	return &tweet, nil
}
