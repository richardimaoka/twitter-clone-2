import { SearchBox } from "./SearchBox";
import styles from "./style.module.css";

export function RightPane() {
  return (
    <div className={styles.rightPane}>
      <SearchBox />
    </div>
  );
}
