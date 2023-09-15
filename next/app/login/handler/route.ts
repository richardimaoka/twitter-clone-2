import { NextResponse } from "next/server";
// Firebase Admin SDK as route handler is purely on server-side
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";

type LoginRequestBody = {
  idToken: string;
  // csrfToken: string;
};

function isValidRequest(jsonBody: any): jsonBody is LoginRequestBody {
  return (
    typeof jsonBody === "object" &&
    /* jsonBody can be null*/ jsonBody &&
    "idToken" in jsonBody &&
    typeof jsonBody.idToken === "string"
  );
}

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

async function jsonBody(request: Request): Promise<any | ErrorResult> {
  try {
    const json = await request.json();
    return json;
  } catch (e) {
    return {
      kind: "ErrorResult",
      error: "missing json body",
      detail: `${e}`,
    };
  }
}

async function createSessionCooke(
  firebaseAuth: Auth,
  idToken: string
): Promise<string | null> {
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  try {
    // Create the session cookie. This will also verify the ID token in the process.
    // The session cookie will have the same claims as the ID token.
    // To only allow session cookie setting on recent sign-in, auth_time in ID token
    // can be checked to ensure user was recently signed in before creating a session cookie.
    const sessionCookie = await firebaseAuth.createSessionCookie(idToken, {
      expiresIn,
    });
    return sessionCookie;
  } catch (e) {
    console.log(e);
    console.log("Failed to create session cookie");
    return null;
  }
}

export async function POST(request: Request) {
  console.log("POST: /login/handler/route.ts");

  // 1. Firebase Admin SDK as route handler is purely on server-side
  const auth = getFirebaseAuth();
  if (isErrorResult(auth)) {
    console.log(auth.error);
    console.log(auth.detail);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }

  // 2. JSON from request body
  const json = await jsonBody(request);
  if (isErrorResult(json)) {
    console.log(json.error);
    console.log(json.detail);
    return NextResponse.json(
      { error: "invalid login request - missing json" },
      { status: 401 }
    );
  }

  // 3. Validate JSON body
  if (!isValidRequest(json)) {
    console.log("invalid login request - missing idToken string in json body");
    return NextResponse.json(
      { error: "invalid login request - missing idToke string in json body" },
      { status: 401 }
    );
  }

  // https://firebase.google.com/docs/auth/admin/manage-cookies#create_session_cookie
  // Get the ID token passed and the CSRF token.
  const idToken = json.idToken;

  // const csrfToken =json.csrfToken
  // // Guard against CSRF attacks.
  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send("UNAUTHORIZED REQUEST!");
  //   return;
  // }

  // 4. Create session cookie
  const sessionCookie = await createSessionCooke(auth, idToken);
  if (!sessionCookie) {
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }

  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  // Set cookie policy for session cookie.
  let response = NextResponse.json({ status: "success" });
  response.cookies.set("session", sessionCookie, {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return response;
}
