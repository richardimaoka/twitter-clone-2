package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"github.com/richardimaoka/twitter-clone-2/gqlgen/database"
)

// type City struct {
// 	Name       string   `firestore:"name,omitempty"`
// 	State      string   `firestore:"state,omitempty"`
// 	Country    string   `firestore:"country,omitempty"`
// 	Capital    bool     `firestore:"capital,omitempty"`
// 	Population int64    `firestore:"population,omitempty"`
// 	Regions    []string `firestore:"regions,omitempty"`
// }
// cities := []struct {
// 	id string
// 	c  City
// }{
// 	{id: "SF", c: City{Name: "San Francisco", State: "CA", Country: "USA", Capital: false, Population: 860000}},
// 	{id: "LA", c: City{Name: "Los Angeles", State: "CA", Country: "USA", Capital: false, Population: 3900000}},
// 	{id: "DC", c: City{Name: "Washington D.C.", Country: "USA", Capital: true, Population: 680000}},
// 	{id: "TOK", c: City{Name: "Tokyo", Country: "Japan", Capital: true, Population: 9000000}},
// 	{id: "BJ", c: City{Name: "Beijing", Country: "China", Capital: true, Population: 21500000}},
// }
// for _, c := range cities {
// 	_, err := client.Collection("cities").Doc(c.id).Set(context.Background(), c.c)
// 	if err != nil {
// 		panic(err)
// 	}
// }

type User struct {
	UserName       string `firestore:"userName"`
	UserId         string `firestore:"userId"`
	ProfilePicture string `firestore:"profilePicture"`
}

func JsonRead(filePath string, v interface{}) error {
	jsonBytes, err := os.ReadFile(filePath)
	if err != nil {
		return fmt.Errorf("failed to read file %s, %s", filePath, err)
	}

	err = json.Unmarshal(jsonBytes, v)
	if err != nil {
		return fmt.Errorf("failed to unmarshal %s, %s", filePath, err)
	}

	return nil
}

func seedTweets(client *firestore.Client) error {
	matches, err := filepath.Glob("data/tweets/*.json")
	if err != nil {
		return fmt.Errorf("failed to glob: %s", err)
	}

	for _, tweetFile := range matches {
		var tweet database.Tweet
		err = JsonRead(tweetFile, &tweet)
		if err != nil {
			return fmt.Errorf("failed to read %s: %s", tweetFile, err)
		}

		docPath := fmt.Sprintf("tweets/%s", tweet.ID)
		_, err = client.Doc(docPath).Set(context.Background(), tweet)
		if err != nil {
			return fmt.Errorf("failed to set tweet: %s", err)
		}

		log.Printf("seed tweet id = %s", tweet.ID)
	}

	return nil
}

func seed() {
	log.Printf("seed() start")
	ctx := context.Background()

	log.Printf("initialize firebase app")
	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		// https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments
		// If you are working in a non-Google server environment in which default credentials lookup can't be fully automated,
		// you can initialize the SDK with an exported service account key file.
		// ... When authorizing via a service account, ... You can either set the GOOGLE_APPLICATION_CREDENTIALS environment variable
		log.Printf("Did you correctly set GOOGLE_APPLICATION_CREDENTIALS = '%s'?\n", os.Getenv("GOOGLE_APPLICATION_CREDENTIALS"))

		log.Fatalf("error initializing app: %v\n", err)
	}

	log.Printf("initialize firestore client")
	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln("failed to initialize firestore", err)
	}
	defer client.Close()

	log.Printf("start seeding users")
	u := &User{UserName: "richardimoaka"}
	res, err := client.Doc("users/richardimoaka").Set(ctx, u)
	if err != nil {
		log.Fatalf("failed to set user: %v\n", err)
	}
	fmt.Println("result: ", res)

	log.Printf("start seeding tweets")
	err = seedTweets(client)
	if err != nil {
		log.Fatalf("failed to seed tweets: %v\n", err)
	}
}
