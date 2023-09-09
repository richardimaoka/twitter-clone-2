import Image from "next/image";
import styles from "./style.module.css";

import {
  faArrowUpFromBracket,
  faBookmark,
  faComment,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetReplyFragment on Tweet {
    userName
    userId
    profilePicture
    body
    date
    retweets
    quotes
    numLikes
  }
`);

interface TweetReplyProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetReply = (props: TweetReplyProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  //https://twitter.com/TwitterJP/status/1570218396775481344
  return (
    <div className={`${styles.tweet} ${styles.reply}`}>
      <div className={styles.replyLeft}>
        <Image
          className={styles.profilepic}
          src={fragment.profilePicture ? fragment.profilePicture : noProfilePic}
          width={40}
          height={40}
          alt={"user profile pic"}
        />
      </div>
      <div className={styles.replyRight}>
        <div className={styles.replyHeader}>
          <div className={styles.username}>{fragment.userName}</div>
          <div className={styles.userid}>&#064;{fragment.userId}</div>·
          <div className={styles.replyTime}>{fragment.date}</div>
        </div>
        <div className={styles.replyBody}>{fragment.body}</div>
        <div className={styles.replyActions}>
          <div className={styles.replyActionItem}>
            <FontAwesomeIcon className={styles.iconReply} icon={faComment} />
            <div className={styles.replyActionValue}>{}</div>
          </div>
          <div className={styles.replyActionItem}>
            <FontAwesomeIcon className={styles.iconReply} icon={faRetweet} />
            {fragment.retweets && fragment.retweets > 0 ? (
              <div className={styles.replyActionValue}>{fragment.retweets}</div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.replyActionItem}>
            <FontAwesomeIcon className={styles.iconReply} icon={faHeart} />
            {fragment.retweets && fragment.retweets > 0 ? (
              <div className={styles.replyActionValue}>{fragment.numLikes}</div>
            ) : (
              <></>
            )}
          </div>
          <FontAwesomeIcon
            className={styles.iconReply}
            icon={faArrowUpFromBracket}
          />
        </div>
      </div>
    </div>
  );
};
