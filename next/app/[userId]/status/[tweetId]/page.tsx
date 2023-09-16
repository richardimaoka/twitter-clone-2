import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import styles from "./style.module.css";

export default function Page() {
  return (
    <div className={styles.home}>
      <section className={styles.leftPane}>
        <LeftPane />
      </section>
      <main></main>
      <section className={styles.rightPane}>
        <RightPane />
      </section>
    </div>
  );
}
