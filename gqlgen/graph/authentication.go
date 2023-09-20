package graph

import (
	"github.com/richardimaoka/twitter-clone-2/gqlgen/auth"
	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph/model"
)

func canViewTweet(viewer *auth.User, tweet model.Tweet) bool {
	// if tweet's user is nil, then better preserve privacy of the deleted user
	if tweet.User == nil {
		return false
	}

	// tweet's user exists
	// if tweet's user is not private, then you can view the tweet
	if tweet.User.IsPrivate == nil || !*tweet.User.IsPrivate {
		return true
	}

	// tweet's user is private
	// anonymous viewer is not allowed
	if viewer == nil {
		return false
	}

	// tweet's user is private
	// viewer should be in the followers
	for _, follower := range tweet.User.Followers {
		if follower == nil {
			continue
		}

		// viewer is found in followers, then true
		if follower.UserID != nil && *follower.UserID == viewer.UserID {
			return true
		}
	}
	// if not in follower, then you cannot view the tweet
	return false
}
