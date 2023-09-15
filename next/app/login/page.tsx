import { AuthComponent } from "@/components/auth/authentication";
import { isLoggedInServerSide } from "@/libs/serverAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  const isLoggedIn = await isLoggedInServerSide(sessionCookie?.value);
  if (isLoggedIn) {
    // if already logged in successfully, then redirect
    redirect("/home");
  } else {
    // else, let the user log-in
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
    };
    return <AuthComponent firebaseConfig={firebaseConfig} />;
  }
}
