import { TweetTimelineView } from "../components/timeline/TweetTimeline";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { cookies } from "next/headers";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default async function Page() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("env", firebaseConfig);
  return (
    <main>
      <TweetTimelineView />
    </main>
  );
}
