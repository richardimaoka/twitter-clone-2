package data_layer

import "context"

type DataLayer interface {
	GetUser(ctx context.Context, userId string) (*User, error)
	GetTweet(ctx context.Context, tweetId string) (*Tweet, error)
}
