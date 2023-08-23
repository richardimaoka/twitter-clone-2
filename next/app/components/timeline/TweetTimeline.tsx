"use client";

import { useSuspenseQuery } from "@apollo/client";
import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";
import { Suspense, startTransition, useEffect, useState } from "react";
import { toTimeString } from "@/libs/gql/timeString";

export const LoadMoreTweetsButton = () => {
  const initialTime = new Date("2023-08-18T09:30:10.000Z");
  const [currentTime, setCurrentTime] = useState(initialTime);

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

  return <button onClick={onClick}>最新ツイートを表示</button>;
};

const queryDefinition = graphql(/* GraphQL */ `
  query TimeLinePageQuery($currentTime: Time!) {
    timeline(currentTime: $currentTime) {
      ...TimelineTweetFragment
      tweetId
    }
  }
`);

export const TweetTimelineView = () => {
  // console.log(print(queryDefinition));
  const initialTime = "2023-08-18T09:30:10.000Z";
  const [value, setValue] = useState(initialTime);

  const { data, fetchMore } = useSuspenseQuery(queryDefinition, {
    variables: { currentTime: initialTime },
  });

  console.log("timeline in TweetTimeline", data.timeline);

  if (!data.timeline) {
    return <div>no data</div>;
  }

  return (
    <div className={styles.column}>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button
        onClick={() => {
          const timeStr = toTimeString(value);
          if (timeStr) {
            startTransition(() => {
              fetchMore({ variables: { currentTime: timeStr } });
            });
          }
        }}
      >
        最新ツイートを表示
      </button>
      {data.timeline.map((tweet) => (
        <TweetView key={tweet.tweetId} fragment={tweet} />
      ))}
    </div>
  );
};
