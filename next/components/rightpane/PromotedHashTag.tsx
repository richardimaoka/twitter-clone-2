import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function PromotedHashTag() {
  return (
    <div className={styles.promotedHashTag}>
      <div className={styles.promotedHashTagTag}>&#35;モンハンNow</div>
      <div className={styles.promotedHashTagTitle}>
        『モンスターハンターNow』リアル狩猟解禁！
      </div>
      <div className={styles.promotedHashTagAuthor}>
        <FontAwesomeIcon
          className={styles.promotedHashTagAuthorIcon}
          icon={faUpRightFromSquare}
        />
        Promoted by モンスターハンターNow 公式
      </div>
    </div>
  );
}
