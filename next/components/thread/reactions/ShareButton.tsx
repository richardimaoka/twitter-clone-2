import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

export function ShareButton() {
  return (
    <div>
      <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
    </div>
  );
}
