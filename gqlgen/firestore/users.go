package firestore

type User struct {
	UserName       string `firestore:"userName"`
	UserId         string `firestore:"userId"`
	ProfilePicture string `firestore:"profilePicture"`
}

type Tweet struct {
	UserId string `firestore:"userId"`
}
