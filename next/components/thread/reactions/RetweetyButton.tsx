import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

interface Props {
  counts?: number | null;
}

export function RetweetyButton(props: Props) {
  return (
    <div>
      <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
      {props.counts && <span className={styles.counts}>{props.counts}</span>}
    </div>
  );
}
