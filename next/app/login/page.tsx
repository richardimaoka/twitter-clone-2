import { AuthComponent } from "@/components/auth/authentication";
import { cookies } from "next/headers";

export default function Page() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  return <AuthComponent firebaseConfig={firebaseConfig} />;
}
