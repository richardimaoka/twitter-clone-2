package graph

import (
	"encoding/json"
	"os"

	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	allTweets []*model.Tweet
}

func NewResolver() (*Resolver, error) {
	bytes, err := os.ReadFile("data/timeline.json")
	if err != nil {
		return nil, err
	}

	var resolver Resolver
	err = json.Unmarshal(bytes, &resolver.allTweets)
	if err != nil {
		return nil, err
	}

	return &resolver, nil
}
