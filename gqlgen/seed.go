package main

import (
	"context"
	"fmt"
	"log"
	"os"

	firebase "firebase.google.com/go/v4"
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

func seed() {
	ctx := context.Background()

	app, err := firebase.NewApp(ctx, nil)
	if err != nil {
		// https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments
		// If you are working in a non-Google server environment in which default credentials lookup can't be fully automated,
		// you can initialize the SDK with an exported service account key file.
		// ... When authorizing via a service account, ... You can either set the GOOGLE_APPLICATION_CREDENTIALS environment variable
		log.Printf("Did you correctly set GOOGLE_APPLICATION_CREDENTIALS = '%s'?\n", os.Getenv("GOOGLE_APPLICATION_CREDENTIALS"))

		log.Fatalf("error initializing app: %v\n", err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln("failed to initialize firestore", err)
	}
	defer client.Close()

	u := &User{UserName: "richardimoaka"}
	res, err := client.Doc("users/richardimoaka").Set(ctx, u)
	if err != nil {
		log.Fatalf("failed to set user: %v\n", err)
	}

	fmt.Println("result: ", res)
}
