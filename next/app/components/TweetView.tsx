import Image from "next/image";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { TweetThreadActions } from "./TweetThreadActions";

const fragmentDefinition = graphql(`
  fragment TweetFragment on Tweet {
    userName
    userId
    profilePicture
    body
    picturePath
    pictureWidth
    pictureHeight
    time
    date
    retweets
    quotes
    likes
    bookmarks
  }
`);

interface TweetViewProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetView = (props: TweetViewProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  //https://twitter.com/TwitterJP/status/1570218396775481344
  //https://twitter.com/TwitterJP/status/1587301348604841987
  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <div>
          <Image
            className={styles.profilepic}
            src={
              fragment.profilePicture ? fragment.profilePicture : noProfilePic
            }
            width={40}
            height={40}
            alt={"user profile pic"}
          />
        </div>
        <div>
          <div className={styles.username}>{fragment.userName}</div>
          <div className={styles.userid}>&#064;{fragment.userId}</div>
        </div>
      </div>
      <div className={styles.body}>{fragment.body}</div>
      {fragment.picturePath &&
        fragment.pictureWidth &&
        fragment.pictureHeight && (
          <Image
            className={styles.tweetpic}
            src={fragment.picturePath}
            width={fragment.pictureWidth}
            height={fragment.pictureHeight}
            alt={"tweet pic"}
          />
        )}
      <div className={styles.time}>
        {fragment.date} · {fragment.time}
      </div>
      <div className={styles.reactions}>
        <div>
          <span className={styles.reactionvalue}>{fragment.retweets}</span>
          <span className={styles.reactionname}> 件のリツイート</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>{fragment.quotes}</span>
          <span className={styles.reactionname}> 件の引用</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>{fragment.likes}</span>
          <span className={styles.reactionname}> 件のいいね</span>
        </div>
        <div>
          <span className={styles.reactionvalue}>{fragment.bookmarks}</span>
          <span className={styles.reactionname}> ブックマーク</span>
        </div>
      </div>
      <TweetThreadActions />
    </div>
  );
};
