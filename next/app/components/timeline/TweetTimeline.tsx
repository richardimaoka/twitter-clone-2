"use client";

import { useSuspenseQuery } from "@apollo/client";
import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";
import { useEffect, useState } from "react";

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
  const initialTime = new Date("2023-08-18T09:30:10.000Z");
  const [currentTime, setCurrentTime] = useState(initialTime);

  const { data, fetchMore } = useSuspenseQuery(queryDefinition, {
    variables: { currentTime: currentTime.toISOString() },
  });

  useEffect(() => {
    console.log(currentTime);
  }, [currentTime]);

  const onClick = () => {
    const y = currentTime.getFullYear(),
      m = currentTime.getMonth(),
      d = currentTime.getDate(),
      h = currentTime.getHours() + 1,
      min = currentTime.getMinutes(),
      s = currentTime.getSeconds();
    const updatedTime = new Date(y, m, d, h, min, s);
    setCurrentTime(updatedTime);
  };

  if (!data.timeline) {
    return <div>no data</div>;
  }

  return (
    <div className={styles.column}>
      <button onClick={onClick}>最新ツイートを表示</button>
      {data.timeline.map((tweet) => (
        <TweetView key={tweet.tweetId} fragment={tweet} />
      ))}
    </div>
  );
};
