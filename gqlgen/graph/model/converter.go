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
