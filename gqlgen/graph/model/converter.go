package model

import "github.com/richardimaoka/twitter-clone-2/gqlgen/data_layer"

func toModelUser(userData *data_layer.User) *User {
	// copy userData fields to variables
	userId := userData.UserId
	username := userData.UserName
	profilePicture := userData.ProfilePicture
	falseValue := false

	return &User{
		UserID:         &userId,
		UserName:       &username,
		IsPrivate:      &falseValue,
		ProfilePicture: &profilePicture,
	}
}

func toModelTweet(tweetData *data_layer.Tweet) *Tweet {
	// copy tweetDAta fields to variables
	tweetId := tweetData.ID
	userName := tweetData.UserName
	userId := tweetData.UserID
	profilePicture := tweetData.ProfilePicture
	user := tweetData.User
	body := tweetData.Body
	picturePath := tweetData.PicturePath
	pictureWidth := tweetData.PictureWidth
	pictureHeight := tweetData.PictureHeight
	timestamp := tweetData.TimeStamp
	time := tweetData.Time
	date := tweetData.Date
	retweets := tweetData.Retweets
	quotes := tweetData.Quotes
	numQuotes := tweetData.NumQuotes
	numLikes := tweetData.NumLikes
	numRetweets := tweetData.NumRetweets
	numBookmarks := tweetData.NumBookmarks
	numImpressions := tweetData.NumImpressions
	numReplies := tweetData.NumReplies
	bookmarks := tweetData.Bookmarks
	impressions := tweetData.Impressions
	// replies := tweetData.Replies

	return &Tweet{
		ID:             tweetId,
		UserName:       &userName,
		UserID:         &userId,
		ProfilePicture: &profilePicture,
		User:           toModelUser(&user),
		Body:           &body,
		PicturePath:    &picturePath,
		PictureWidth:   &pictureWidth,
		PictureHeight:  &pictureHeight,
		TimeStamp:      &timestamp,
		Time:           &time,
		Date:           &date,
		Retweets:       &retweets,
		Quotes:         &quotes,
		NumQuotes:      &numQuotes,
		NumLikes:       &numLikes,
		NumRetweets:    &numRetweets,
		NumBookmarks:   &numBookmarks,
		NumImpressions: &numImpressions,
		NumReplies:     &numReplies,
		Bookmarks:      &bookmarks,
		Impressions:    &impressions,
	}
}
