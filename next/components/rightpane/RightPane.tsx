import { SearchBox } from "./SearchBox";
import { WhatsGoingOn } from "./WhatsGoingOn";
import styles from "./style.module.css";

export function RightPane() {
  return (
    <div className={styles.rightPane}>
      <SearchBox />
      <WhatsGoingOn />
    </div>
  );
}
