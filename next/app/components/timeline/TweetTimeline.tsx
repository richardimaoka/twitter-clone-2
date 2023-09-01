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
  const [state, dispatch] = useReducer(reducer, emptyState());

  useEffect(() => {
    const runQuery = async () => {
      const currentTime = toTimeString(value);
      if (currentTime) {
        const url = "http://localhost:8080/query";
        const variables = { currentTime: currentTime };
        const queryResult = await request(url, queryDefinition, variables);
        dispatch({ actionType: "LOAD_NEWER_TWEETS", queryResult: queryResult });
      }
    };
    runQuery();
  }, [value]); // run whenever value is incremented

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
    console.log("onClick");
    const url = "http://localhost:8080/query";
    const variables = { body: "hello world" };
    const result = await request(url, mutationDefinition, variables);

    //TODO: error handling
    if (!result.postTweet) return;

    dispatch({ actionType: "ADD_SINGLE_NEW_TWEET", tweet: result.postTweet });
  };

  return (
    <div className={styles.column}>
      <div>
        <button onClick={incrementTime}>最新ツイートを表示</button>
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
      {state.queryResult?.timeline &&
        state.queryResult.timeline.map((tweet) => (
          <TweetView key={tweet.id} fragment={tweet} />
        ))}
    </div>
  );
};
