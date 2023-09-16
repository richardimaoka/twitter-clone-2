"use client";

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  firebaseConfig: {
    apiKey: string | undefined;
    authDomain: string | undefined;
    projectId: string | undefined;
  };
}

async function sendLoginRequest(idToken: string): Promise<Response> {
  const res = await fetch("/login/handler", {
    method: "POST",
    body: JSON.stringify({ idToken: idToken }),
  });

  return res;
}

export const AuthComponent = (props: Props) => {
  // Initialize Firebase
  const app = initializeApp(props.firebaseConfig); // Initialize Firebase

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential) {
        console.log("credential is missing in GoogleAuthProvider result");
        return;
      }

      try {
        const idToken = await result.user.getIdToken();
        console.log("making request to /login/handler");
        try {
          const res = await sendLoginRequest(idToken);
          const json = await res.json();
          if (res.ok) {
            console.log("successful login", res, json);
            router.push("/home");
          } else {
            console.log("login failure");
          }
        } catch (error) {
          console.log("error", error);
          console.log("failed in a login request to /login/handler");
          alert(error);
        }
      } catch (error) {
        console.log("error", error);
        console.log("failed in a getIdToken request");
        alert(error);
      }
    } catch (error: any) {
      alert(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    }
  }
  const logout = () => {
    signOut(auth);
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
      <div>
        <button onClick={login}>login</button>
      </div>
      <div>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
};
