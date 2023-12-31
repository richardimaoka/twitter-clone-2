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
	"github.com/richardimaoka/twitter-clone-2/gqlgen/auth"
	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph"
	"github.com/rs/cors"
)

const defaultPort = "8080"

func debugMiddleWare(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// log.Printf("header Authorization: %s", r.Header.Get("Authorization"))
		next.ServeHTTP(w, r)
	})
}

func server() {
	app, err := firebase.NewApp(context.Background(), nil)
	if err != nil {
		log.Fatalf("error initializing app: %v\n", err)
	}

	dbClient, err := app.Firestore(context.Background())
	if err != nil {
		log.Fatalln("failed to initialize firestore", err)
	}
	defer dbClient.Close()

	authClient, err := app.Auth(context.Background())
	if err != nil {
		log.Fatalf("error getting Auth client: %v\n", err)
	}

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
		AllowedHeaders:   []string{"Content-Type"},
		Debug:            true,
	}).Handler)

	router.Use(auth.Middleware(dbClient, authClient))

	resolver, err := graph.NewResolver(app, dbClient)
	if err != nil {
		panic(err)
	}
	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: resolver}))

	router.Handle("/", playground.Handler("GraphQL playground", "/query"))
	router.Handle("/query", debugMiddleWare(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
