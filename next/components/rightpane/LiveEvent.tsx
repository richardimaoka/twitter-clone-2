import Image from "next/image";
import styles from "./style.module.css";

export function LiveEvent() {
  return (
    <div className={styles.liveEvent}>
      <div>
        <div className={styles.liveEventType}>Event・LIVE</div>
        <div className={styles.liveEventName}>New York Fashion Week 2023</div>
      </div>
      <div>
        <Image
          className={styles.liveEventImage}
          src="/images/newyork-fashion-week.webp"
          width={120}
          height={68}
          alt={"nyfw"}
        />
      </div>
    </div>
  );
}
