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

function withTimeout<T>(promise: Promise<T>, timeout: number) {
  const errorMessage = `await での待機が ${timeout}ms を超えました`;

  const timeoutPromise: Promise<T> = new Promise((_, reject) =>
    setTimeout(() => reject(errorMessage), timeout)
  );
  // Promise.race()を利用して先に解決した方を優先する
  return Promise.race([
    promise, // 本来実行したい promise 関数
    timeoutPromise, // こちらの方が早く解決すると reject()
  ]);
}

function useSignInState(firebaseConfig: FirebaseConfig) {
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
        console.log("onAuthStateChanged successful signed out");
        // User is signed out
        // ...
        setState({ kind: "SignedOut" });
      }
    });

    return unsubscribe;
  });

  return state;
}
