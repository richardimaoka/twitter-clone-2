import { SearchBox } from "./SearchBox";
import { TrendingPanel } from "./TrendingPanel";
import styles from "./style.module.css";

export function RightPane() {
  return (
    <div className={styles.rightPane}>
      <SearchBox />
      <TrendingPanel />
    </div>
  );
}
