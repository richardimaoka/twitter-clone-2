import { NextResponse } from "next/server";
// Firebase Admin SDK as route handler is purely on server-side
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

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

export async function POST(request: Request) {
  console.log("POST: /login/handler/route.ts");
  try {
    // Firebase Admin SDK as route handler is purely on server-side
    const appAlreadyExists = getApps().length === 0;
    const app = appAlreadyExists ? initializeApp() : getApp();
    const auth = getAuth(app);

    try {
      const json = await request.json();
      if (isValidRequest(json)) {
        // https://firebase.google.com/docs/auth/admin/manage-cookies#create_session_cookie
        // Get the ID token passed and the CSRF token.
        const idToken = json.idToken;

        // const csrfToken =json.csrfToken
        // // Guard against CSRF attacks.
        // if (csrfToken !== req.cookies.csrfToken) {
        //   res.status(401).send("UNAUTHORIZED REQUEST!");
        //   return;
        // }

        // Set session expiration to 5 days.
        const expiresIn = 60 * 60 * 24 * 5 * 1000;

        // Create the session cookie. This will also verify the ID token in the process.
        // The session cookie will have the same claims as the ID token.
        // To only allow session cookie setting on recent sign-in, auth_time in ID token
        // can be checked to ensure user was recently signed in before creating a session cookie.

        try {
          const sessionCookie = await auth.createSessionCookie(idToken, {
            expiresIn,
          });

          // Set cookie policy for session cookie.
          let response = NextResponse.json({ status: "success" });
          response.cookies.set("session", sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
          });

          return response;
        } catch (e) {
          console.log(e);
          console.log("Failed to create session cookie");
          return NextResponse.json(
            { error: "internal server error" },
            { status: 500 }
          );
        }
      } else {
        console.log(
          "invalid login request - missing idToken string in json body"
        );
        return NextResponse.json(
          { error: "invalid login request" },
          { status: 401 }
        );
      }
    } catch (e) {
      console.log("invalid login request - missing json body");
      return NextResponse.json(
        { error: "invalid login request" },
        { status: 401 }
      );
    }
  } catch (e) {
    console.log(e);
    console.log("Firebase Admin SDK initialization error");

    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    );
  }
}
