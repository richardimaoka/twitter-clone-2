import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { ErrorResult, isErrorResult } from "./errors";

// try-catch at the root - (i.e.) no throw
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

// try-catch at the root - (i.e.) no throw
async function verifySessionCookie(
  firebaseAuth: Auth,
  sessionCookie: string
): Promise<boolean | ErrorResult> {
  try {
    // upon verificatoin failure, it will throw
    await firebaseAuth.verifySessionCookie(
      sessionCookie,
      true /** checkRevoked */
    );

    return true;
  } catch (e) {
    return {
      kind: "ErrorResult",
      error: "Failed to verify session cookie",
      detail: `${e}`,
    };
  }
}

// 1. Return true if logged in
// 2. Return false if not logged in
// 3. Throw, to render error page on Next.js route, upon internal error (e.g. Firebase Admin SDK initialization error)
export async function isLoggedInServerSide(
  sessionCookie?: string
): Promise<boolean> {
  // Firebase Admin SDK as route handler is purely on server-side
  const auth = getFirebaseAuth();
  if (isErrorResult(auth)) {
    console.log(auth.error);
    console.log(auth.detail);
    throw new Error("internal error"); // can't proceed, show error and haltion error)
  }

  if (!sessionCookie) return false;

  const verified = await verifySessionCookie(auth, sessionCookie);
  if (isErrorResult(verified)) {
    return false;
  } else {
    return verified;
  }
}
