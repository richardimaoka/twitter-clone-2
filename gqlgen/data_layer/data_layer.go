package data_layer

type DataLayer interface {
	GetTweet(tweetId string) (*Tweet, error)
}
