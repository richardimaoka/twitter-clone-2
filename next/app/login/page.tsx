import { Auth } from "@/components/auth/authentication";

export default function Page() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
  };

  return <Auth firebaseConfig={firebaseConfig} />;
}
