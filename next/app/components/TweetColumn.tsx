import { TweetView } from "./TweetView";
import styles from "./style.module.css";

export const TweetColumn = () => {
  return (
    <div className={styles.column}>
      <TweetView />
    </div>
  );
};
