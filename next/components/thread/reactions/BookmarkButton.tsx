import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

interface Props {
  counts?: number | null;
}

export function BookmarkButton(props: Props) {
  return (
    <button className={styles.button}>
      <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
      {typeof props.counts === "number" && props.counts > 0 && (
        <span className={styles.counts}>{props.counts}</span>
      )}
    </button>
  );
}
