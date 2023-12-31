// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"time"
)

type Tweet struct {
	ID             string     `json:"id"`
	UserName       *string    `json:"userName,omitempty"`
	UserID         *string    `json:"userId,omitempty"`
	ProfilePicture *string    `json:"profilePicture,omitempty"`
	User           *User      `json:"user,omitempty"`
	Body           *string    `json:"body,omitempty"`
	PicturePath    *string    `json:"picturePath,omitempty"`
	PictureWidth   *int       `json:"pictureWidth,omitempty"`
	PictureHeight  *int       `json:"pictureHeight,omitempty"`
	TimeStamp      *time.Time `json:"timeStamp,omitempty"`
	Time           *string    `json:"time,omitempty"`
	Date           *string    `json:"date,omitempty"`
	Retweets       *int       `json:"retweets,omitempty"`
	Quotes         *int       `json:"quotes,omitempty"`
	NumQuotes      *int       `json:"numQuotes,omitempty"`
	NumLikes       *int       `json:"numLikes,omitempty"`
	NumRetweets    *int       `json:"numRetweets,omitempty"`
	NumBookmarks   *int       `json:"numBookmarks,omitempty"`
	NumImpressions *int       `json:"numImpressions,omitempty"`
	NumReplies     *int       `json:"numReplies,omitempty"`
	Bookmarks      *int       `json:"bookmarks,omitempty"`
	Impressions    *int       `json:"impressions,omitempty"`
	Replies        []*Tweet   `json:"replies,omitempty"`
}

type User struct {
	UserName       *string `json:"userName,omitempty"`
	UserID         *string `json:"userId,omitempty"`
	ProfilePicture *string `json:"profilePicture,omitempty"`
	IsPrivate      *bool   `json:"isPrivate,omitempty"`
	Followers      []*User `json:"followers,omitempty"`
}
