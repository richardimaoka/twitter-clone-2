package file

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/richardimaoka/twitter-clone-2/gqlgen/graph/model"
)

func ReadTweet(tweetId string) (*model.Tweet, error) {
	filePath := "data/tweet.json"

	bytes, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var tweet model.Tweet
	err = json.Unmarshal(bytes, &tweet)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal %s, %s", filePath, err)
	}

	return &tweet, nil
}
