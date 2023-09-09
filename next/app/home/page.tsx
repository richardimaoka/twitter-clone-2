import Link from "next/link";
import { Auth } from "../components/auth/authentication";
import { TweetTimelineView } from "../components/timeline/TweetTimeline";

import { cookies } from "next/headers";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

export default async function Page() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("env", firebaseConfig);

  return (
    <main>
      <Link href="/">twitter</Link>
      <Auth firebaseConfig={firebaseConfig} />
      <TweetTimelineView firebaseConfig={firebaseConfig} />
    </main>
  );
}
