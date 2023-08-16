import styles from "./style.module.css";

import {
  faArrowUpFromBracket,
  faBookmark,
  faComment,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TweetThreadActions = () => (
  <div className={styles.actions}>
    <FontAwesomeIcon className={styles.icon} icon={faComment} />
    <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
    <FontAwesomeIcon className={styles.icon} icon={faHeart} />
    <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
    <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
  </div>
);
