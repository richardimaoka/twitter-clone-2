package graph

import "github.com/richardimaoka/twitter-clone-2/gqlgen/auth"

func canViewTweet(user *auth.User) bool {
	return true
}
