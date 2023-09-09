package main

import (
	"flag"
	"fmt"
	"os"
)

func main() {
	serverSubCmd := flag.NewFlagSet("server", flag.ExitOnError)
	seedSubCmd := flag.NewFlagSet("seed", flag.ExitOnError)

	if len(os.Args) < 2 {
		fmt.Println("expected 'server' or 'seed' subcommands")
		os.Exit(1)
	}

	switch os.Args[1] {
	case "server":
		serverSubCmd.Parse(os.Args[2:])
		server()
	case "seed":
		seedSubCmd.Parse(os.Args[2:])
	default:
		fmt.Println("expected 'server' or 'seed' subcommands")
		os.Exit(1)
	}
}
