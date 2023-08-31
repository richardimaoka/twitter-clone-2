"use client";

import { useSuspenseQuery } from "@apollo/client";
import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";
import { TimeLinePageQueryQuery, TimeString } from "@/libs/gql/graphql";
import { toTimeString } from "@/libs/gql/timeString";
import { request } from "graphql-request";
import { startTransition, useEffect, useState } from "react";
import { TweetInput } from "./TweetInput";

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
      id
    }
  }
`);

export const TweetTimelineView = () => {
  // console.log(print(queryDefinition));
  const initialTime = "2023-08-18T09:30:10.000Z" as TimeString; //workaround - we need a TimeString constant, or any sure way to get TimeString prop
  const [value, setValue] = useState<TimeString>(initialTime);
  const [tweets, setTweets] = useState<TimeLinePageQueryQuery>({
    __typename: "Query",
    timeline: [],
  });

  useEffect(() => {
    const dataFetch = async () => {
      const url = "http://localhost:8080/query";
      const variables = { currentTime: value };
      const data = await request(url, queryDefinition, variables);
      setTweets(data);
    };
    dataFetch();
  }, [value]);

  return (
    <div className={styles.column}>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const ts = toTimeString(e.target.value);
            if (ts) {
              setValue(ts);
            }
          }}
          value={value}
        />
        <button
          onClick={() => {
            const timeStr = toTimeString(value);
          }}
        >
          最新ツイートを表示
        </button>
      </div>
      {tweets.timeline &&
        tweets.timeline.map((tweet) => (
          <TweetView key={tweet.id} fragment={tweet} />
        ))}
    </div>
  );
};
