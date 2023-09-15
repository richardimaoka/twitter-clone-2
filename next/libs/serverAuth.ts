import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { ErrorResult } from "./errors";

export function getFirebaseAuth(): Auth | ErrorResult {
  try {
    // Firebase Admin SDK as it's a server-side function
    const appAlreadyExists = getApps().length === 0;
    const app = appAlreadyExists ? initializeApp() : getApp();
    return getAuth(app);
  } catch (e) {
    return {
      kind: "ErrorResult",
      error: "Firebase Admin SDK initialization error",
      detail: `${e}`,
    };
  }
}
