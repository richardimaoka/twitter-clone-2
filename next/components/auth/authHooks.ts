import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

interface WaitingSignIn {
  kind: "WaitingSignIn";
}

interface SignedIn {
  kind: "SignedIn";
  user: User;
}

interface SignedOut {
  kind: "SignedOut";
}

type SignInStatus = WaitingSignIn | SignedIn | SignedOut;

interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
}

export function useSignInState(firebaseConfig: FirebaseConfig) {
  const [state, setState] = useState<SignInStatus>({ kind: "WaitingSignIn" });

  // Initialize Firebase
  const app = initializeApp(firebaseConfig); // Initialize Firebase

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("onAuthStateChanged successful signed in");
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setState({ kind: "SignedIn", user: user });
      } else {
        // The else block is called, also when user is completely signed out from the beginning,
        // not only explicitly signed out by user action
        console.log("onAuthStateChanged successful signed out");
        // User is signed out
        setState({ kind: "SignedOut" });
      }
    });

    return unsubscribe;
  }, [auth]);

  console.log("returning sign in state", state);
  return state;
}
