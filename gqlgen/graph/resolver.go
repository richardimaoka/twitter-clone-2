package graph

import (
	"encoding/json"
	"os"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph/model"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	allTweets       []*model.Tweet
	firebaseApp     *firebase.App
	firestoreClient *firestore.Client
}

func NewResolver(firebaseApp *firebase.App, firestoreClient *firestore.Client) (*Resolver, error) {
	bytes, err := os.ReadFile("data/timeline.json")
	if err != nil {
		return nil, err
	}

	var resolver Resolver
	err = json.Unmarshal(bytes, &resolver.allTweets)
	if err != nil {
		return nil, err
	}

	resolver.firebaseApp = firebaseApp
	resolver.firestoreClient = firestoreClient

	return &resolver, nil
}
