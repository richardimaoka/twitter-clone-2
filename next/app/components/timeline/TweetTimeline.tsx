import { useSuspenseQuery } from "@apollo/client";
import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";

const queryDefinition = graphql(/* GraphQL */ `
  query TimeLinePageQuery($currentTime: String!) {
    timeline(currentTime: $currentTime) {
      ...TimelineTweetFragment
      tweetId
    }
  }
`);

export const TweetTimelineView = () => {
  // console.log(print(queryDefinition));

  const currentTime = new Date();
  const { data, fetchMore } = useSuspenseQuery(queryDefinition, {
    variables: { currentTime: currentTime.toISOString() },
  });

  if (!data.timeline) {
    return <div>no data</div>;
  }

  return (
    <div className={styles.column}>
      {data.timeline.map((tweet) => (
        <TweetView key={tweet.tweetId} fragment={tweet} />
      ))}
    </div>
  );
};
