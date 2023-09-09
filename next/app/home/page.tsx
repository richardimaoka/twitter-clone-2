import { RightPane } from "@/components/rightpane/RightPane";
import { TweetTimelineView } from "../../components/timeline/TweetTimeline";
import styles from "./style.module.css";

import { LeftPane } from "@/components/leftpane/LeftPane";
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
    <div className={styles.home}>
      <section className={styles.leftPane}>
        <LeftPane />
      </section>
      <main>
        <TweetTimelineView firebaseConfig={firebaseConfig} />
      </main>
      <section className={styles.rightPane}>
        <RightPane />
      </section>
    </div>
  );
}
