"use client";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

  return <></>;
};
