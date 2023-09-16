import Image from "next/image";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { TweetThreadActions } from "./TweetThreadActions";
import { TweetThreadHeader } from "./TweetThreadHeader";
import { TweetTimeImpressionView } from "./TweetTimeImpressionView";
import { TweetStats } from "./TweetStats";

const fragmentDefinition = graphql(`
  fragment TweetFragment on Tweet {
    ...TweetThreadHeaderFragment
    ...TweetTimeImpressionFragment
    ...TweetStatsFragment
    body
    picturePath
    pictureWidth
    pictureHeight
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
      <TweetThreadHeader fragment={fragment} />
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

      <TweetTimeImpressionView fragment={fragment} />
      <TweetStats fragment={fragment} />
      <TweetThreadActions />
    </div>
  );
};
