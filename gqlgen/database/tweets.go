package database

type Tweet struct {
	UserId string `firestore:"userId"`
}
