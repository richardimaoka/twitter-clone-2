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
	Body           *string    `json:"body,omitempty"`
	PicturePath    *string    `json:"picturePath,omitempty"`
	PictureWidth   *int       `json:"pictureWidth,omitempty"`
	PictureHeight  *int       `json:"pictureHeight,omitempty"`
	TimeStamp      *time.Time `json:"timeStamp,omitempty"`
	Time           *string    `json:"time,omitempty"`
	Date           *string    `json:"date,omitempty"`
	Retweets       *int       `json:"retweets,omitempty"`
	Quotes         *int       `json:"quotes,omitempty"`
	NumLikes       *int       `json:"numLikes,omitempty"`
	Bookmarks      *int       `json:"bookmarks,omitempty"`
	Replies        []*Tweet   `json:"replies,omitempty"`
	Impressions    *int       `json:"impressions,omitempty"`
}
