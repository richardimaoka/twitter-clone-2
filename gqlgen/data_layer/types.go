package data_layer

import "time"

type User struct {
	UserName       string `firestore:"userName"`
	UserId         string `firestore:"userId"`
	ProfilePicture string `firestore:"profilePicture"`
}

type Tweet struct {
	ID             string    `firestore:"id"`
	UserId         string    `firestore:"userId"`
	UserName       string    `firestore:"userName"`
	UserID         string    `firestore:"userId"`
	ProfilePicture string    `firestore:"profilePicture"`
	User           User      `firestore:"user"`
	Body           string    `firestore:"body"`
	PicturePath    string    `firestore:"picturePath"`
	PictureWidth   int       `firestore:"pictureWidth"`
	PictureHeight  int       `firestore:"pictureHeight"`
	TimeStamp      time.Time `firestore:"timeStamp"`
	Time           string    `firestore:"time"`
	Date           string    `firestore:"date"`
	Retweets       int       `firestore:"retweets"`
	Quotes         int       `firestore:"quotes"`
	NumQuotes      int       `firestore:"numQuotes"`
	NumLikes       int       `firestore:"numLikes"`
	NumRetweets    int       `firestore:"numRetweets"`
	NumBookmarks   int       `firestore:"numBookmarks"`
	NumImpressions int       `firestore:"numImpressions"`
	NumReplies     int       `firestore:"numReplies"`
	Bookmarks      int       `firestore:"bookmarks"`
	Impressions    int       `firestore:"impressions"`
	Replies        []Tweet   `firestore:"replies"`
}
