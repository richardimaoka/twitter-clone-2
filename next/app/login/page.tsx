import { AuthComponent } from "@/components/auth/authentication";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type ErrorResult = {
  kind: "ErrorResult";
  error: string;
  detail: string;
};

function isErrorResult(result: any): result is ErrorResult {
  return "kind" in result && result.kind === "ErrorResult";
}

function getFirebaseAuth(): Auth | ErrorResult {
  try {
    // Firebase Admin SDK as route handler is purely on server-side
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

export default async function Page() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  // 1. If no session, let the user log-in
  if (!sessionCookie) {
    return <AuthComponent firebaseConfig={firebaseConfig} />;
  }

  // 2. Get firebase Auth for login verification
  // Firebase Admin SDK as route handler is purely on server-side
  const auth = getFirebaseAuth();
  if (isErrorResult(auth)) {
    console.log(auth.error);
    console.log(auth.detail);
    throw new Error("internal error"); // can't proceed, show error and halt
  }

  // 3. Verify session cookie
  const verified = await verifySessionCookie(auth, sessionCookie.value);
  if (isErrorResult(verified)) {
    return <AuthComponent firebaseConfig={firebaseConfig} />;
  } else if (!verified) {
    return <AuthComponent firebaseConfig={firebaseConfig} />;
  } else {
    // if already logged in successfully, then redirect
    redirect("/home");
  }
}
