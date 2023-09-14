import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TweetTimelineView } from "../../components/timeline/TweetTimeline";
import styles from "./style.module.css";
import { decode } from "punycode";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

export default async function Page() {
  // const cookieStore = cookies();
  // const idToken = cookieStore.get("idToken");

  // if (!idToken) redirect("/login");

  // const appAlreadyExists = getApps().length === 0;
  // const app = appAlreadyExists ? initializeApp() : getApp();
  // const auth = getAuth(app);

  // try {
  //   const decoded = await auth.verifyIdToken(idToken.value);
  // } catch (error) {
  //   console.log(
  //     `redirecting to /login as the id token from cookie = '${idToken.value}' is invalid: ${error}`
  //   );
  //   redirect("/login");
  // }

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
