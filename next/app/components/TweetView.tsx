import styles from "./style.module.css";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

export const TweetView = () => {
  //https://twitter.com/TwitterJP/status/1570218396775481344
  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <div>
          <Image
            className={styles.profilepic}
            src="/images/twitter.jpg"
            width={40}
            height={40}
            alt={"user profile pic"}
          />
        </div>
        <div>
          <div className={styles.username}>Japan</div>
          <div className={styles.userid}>&#064;TwitterJP</div>
        </div>
      </div>
      <div className={styles.body}>
        今日から４日間ゲームのことしか考えないと決めたので、ヘッダーもゲーム仕様にしてみました
      </div>
      <div className={styles.time}>午前10:10 · 2022年9月15日</div>
      <div className={styles.reactions}>
        <div>
          <span className={styles.reactionvalue}>63</span>
          <span className={styles.reactionname}> 件のリツイート</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>15</span>
          <span className={styles.reactionname}> 件の引用</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>371</span>
          <span className={styles.reactionname}> 件のいいね</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>8</span>
          <span className={styles.reactionname}> ブックマーク</span>
        </div>
      </div>
      <div className={styles.actions}>
        <FontAwesomeIcon className={styles.icon} s icon={faComment} />
        <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
        <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
      </div>
    </div>
  );
};
