import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

interface Props {
  counts?: number | null;
}

export function BookmarkButton(props: Props) {
  return (
    <div>
      <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
      {props.counts && <span className={styles.counts}>{props.counts}</span>}
    </div>
  );
}
