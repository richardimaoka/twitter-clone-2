"use client";

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";

interface Props {
  firebaseConfig: {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
  };
}

export const Auth = (props: Props) => {
  // Initialize Firebase
  const app = initializeApp(props.firebaseConfig); // Initialize Firebase

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("onAuthStateChanged successful signed in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        console.log("onAuthStateChanged successful signed out");
        // User is signed out
        // ...
      }
    });

    return () => {
      console.log("unsubscribed");
      unsubscribe();
    };
  });

  return (
    <div>
      <button onClick={login}>login</button>
    </div>
  );
};
