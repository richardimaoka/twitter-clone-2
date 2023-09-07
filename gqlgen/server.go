package main

import (
	"context"
	"log"
	"net/http"
	"os"

	firebase "firebase.google.com/go/v4"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/go-chi/chi"
	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph"
	"github.com/rs/cors"
)

const defaultPort = "8080"

type City struct {
	Name       string   `firestore:"name,omitempty"`
	State      string   `firestore:"state,omitempty"`
	Country    string   `firestore:"country,omitempty"`
	Capital    bool     `firestore:"capital,omitempty"`
	Population int64    `firestore:"population,omitempty"`
	Regions    []string `firestore:"regions,omitempty"`
}

func main() {
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}
	client, err := app.Firestore(context.Background())
	if err != nil {
		log.Printf(os.Getenv("GOOGLE_APPLICATION_CREDENTIALS"))

		log.Fatalln("failed to initialize firestore", err)
	}
	defer client.Close()
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

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		AllowedHeaders:   []string{"Access-Control-Allow-Credentials", "Content-Type"},
		Debug:            true,
	}).Handler)

	router.Use(graph.AuthMiddleware)

	resolver, err := graph.NewResolver(app, client)
	if err != nil {
		panic(err)
	}
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: resolver}))

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
