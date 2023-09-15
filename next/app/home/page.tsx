import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import { isLoggedInServerSide } from "@/libs/serverAuth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TweetTimelineView } from "../../components/timeline/TweetTimeline";
import styles from "./style.module.css";

export default async function Page() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  const isLoggedIn = await isLoggedInServerSide(sessionCookie?.value);
  if (!isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className={styles.home}>
      <section className={styles.leftPane}>
        <LeftPane />
      </section>
      <main>
        <TweetTimelineView />
      </main>
      <section className={styles.rightPane}>
        <RightPane />
      </section>
    </div>
  );
}
