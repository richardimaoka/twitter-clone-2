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

export default async function Page() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");
  console.log("sessionCookie", sessionCookie);
  if (!sessionCookie) {
    return <AuthComponent firebaseConfig={firebaseConfig} />;
  }

  // 1. Firebase Admin SDK as route handler is purely on server-side
  const auth = getFirebaseAuth();
  if (isErrorResult(auth)) {
    console.log(auth.error);
    console.log(auth.detail);
    throw new Error("internal error");
  }

  try {
    // upon verificatoin failure, it will throw
    await auth.verifySessionCookie(
      sessionCookie.value + "abc",
      true /** checkRevoked */
    );
  } catch (e) {
    console.log(e);
    console.log("Failed to verify session cookie");
    throw new Error("invalid login credentials");
  }

  redirect("/home");
}
