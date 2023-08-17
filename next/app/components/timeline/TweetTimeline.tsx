import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetTimelineFragment on Query {
    timeline {
      ...TweetFragment
      tweetId
    }
  }
`);

interface TweetTimelineProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetTimelineView = (props: TweetTimelineProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  if (!fragment.timeline) {
    return <></>;
  }

  return (
    <div className={styles.column}>
      {fragment.timeline.map((tweet) => (
        <TweetView key={tweet.tweetId} fragment={tweet} />
      ))}
    </div>
  );
};
