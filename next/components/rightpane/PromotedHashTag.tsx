import styles from "./style.module.css";

export function PromotedHashTag() {
  return (
    <div className={styles.promotedHashTag}>
      <div className={styles.promotedHashTagTag}>&#35;モンハンNow</div>
      <div className={styles.promotedHashTagTitle}>
        『モンスターハンターNow』リアル狩猟解禁！
      </div>
      <div className={styles.promotedHashTagAuthor}>
        Promoted by モンスターハンターNow 公式
      </div>
    </div>
  );
}
