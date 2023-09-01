"use client";

import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";
import { TimeLinePageQueryQuery, TimeString } from "@/libs/gql/graphql";
import { fromDateToTimeString, toTimeString } from "@/libs/gql/timeString";
import { request } from "graphql-request";
import Image from "next/image";
import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useReducer,
  useState,
} from "react";
import { emptyState, reducer } from "./TimelineReducerDesign";

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

const mutationDefinition = graphql(/* GraphQL */ `
  mutation postTw($body: String!) {
    postTweet(body: $body) {
      ...TimelineTweetFragment
      id
    }
  }
`);
export const TweetTimelineView = () => {
  // console.log(print(queryDefinition));
  const initialTime = "2023-08-18T09:30:10.000Z"; // "2023-08-18T09:30:10.000Z" is known to be a good TimeString
  const [value, setValue] = useState<string>(initialTime);
  const [tweets, setTweets] = useState<TimeLinePageQueryQuery>({
    __typename: "Query",
    timeline: [],
  });
  const [state, dispatch] = useReducer(reducer, emptyState());

  useEffect(() => {
    const dataFetch = async () => {
      const currentTime = toTimeString(value);
      if (currentTime) {
        const url = "http://localhost:8080/query";
        const variables = { currentTime: currentTime };
        const data = await request(url, queryDefinition, variables);
        setTweets(data);
      }
    };
    dataFetch();
  }, [value]);

  const incrementTime = () => {
    const time = toTimeString(value);
    if (!time) return;

    const currentTime = new Date(time);
    const y = currentTime.getFullYear(),
      m = currentTime.getMonth(),
      d = currentTime.getDate(),
      h = currentTime.getHours() + 1,
      min = currentTime.getMinutes(),
      s = currentTime.getSeconds();

    const updatedTime = new Date(y, m, d, h, min, s);
    setValue(fromDateToTimeString(updatedTime));
    console.log(updatedTime);
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    const url = "http://localhost:8080/query";
    const variables = { body: "hello world" };
    const result = await request(url, mutationDefinition, variables);

    if (!result.postTweet) return;

    if (tweets.timeline) {
      setTweets({
        __typename: "Query",
        timeline: [result.postTweet, ...tweets.timeline],
      });
    }
  };

  return (
    <div className={styles.column}>
      <div onClick={incrementTime}>
        <button>最新ツイートを表示</button>
      </div>
      <div>
        <Image
          src="/images/richard-profile.jpg"
          alt="my profile"
          width={40}
          height={40}
        />
        <input type="text" placeholder="いまどうしてる？" />
        <button onClick={onClick}>ツイートする</button>
      </div>
      {tweets.timeline &&
        tweets.timeline.map((tweet) => (
          <TweetView key={tweet.id} fragment={tweet} />
        ))}
    </div>
  );
};
