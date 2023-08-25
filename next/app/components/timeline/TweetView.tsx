import Image from "next/image";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { TweetActions } from "./TweetActions";
import { Header } from "./Header";
import { ProfilePic } from "./ProfilePic";

const fragmentDefinition = graphql(`
  fragment TimelineTweetFragment on Tweet {
    ...TimelineProfilePicFragment
    ...TimelineHeaderFragment
    ...TimelineTweetActionsFragment
    body
    picturePath
    pictureWidth
    pictureHeight
    time
    date
    timeStamp
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
      <div>
        <ProfilePic fragment={fragment} />
      </div>
      <div>
        <Header fragment={fragment} />
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
        <TweetActions fragment={fragment} />
      </div>
    </div>
  );
};
