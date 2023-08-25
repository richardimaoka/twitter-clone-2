package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph/model"
)

// PostTweet is the resolver for the postTweet field.
func (r *mutationResolver) PostTweet(ctx context.Context, body string) (*model.Tweet, error) {
	panic(fmt.Errorf("not implemented: PostTweet - postTweet"))
}

// Tweet is the resolver for the tweet field.
func (r *queryResolver) Tweet(ctx context.Context) (*model.Tweet, error) {
	bytes, err := os.ReadFile("data/tweet.json")
	if err != nil {
		return nil, err
	}

	var tweet model.Tweet
	err = json.Unmarshal(bytes, &tweet)
	if err != nil {
		log.Printf("Error in Tweet - %v", err)
		return nil, fmt.Errorf("internal server error")
	}

	return &tweet, nil
}

// Timeline is the resolver for the timeline field.
func (r *queryResolver) Timeline(ctx context.Context, currentTime time.Time) ([]*model.Tweet, error) {
	fmt.Println("currentTime = ", currentTime)

	var tweets []*model.Tweet
	for _, t := range r.Resolver.allTweets {
		if t.TimeStamp != nil && currentTime.After(*t.TimeStamp) {
			tweets = append(tweets, t)
		}
	}

	return tweets, nil
}

// Mutation returns MutationResolver implementation.
func (r *Resolver) Mutation() MutationResolver { return &mutationResolver{r} }

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
