"use client";

import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { graphql } from "@/libs/gql";
import { toTimeString } from "@/libs/gql/timeString";
import { GraphQLClient, request } from "graphql-request";

import { TimeString } from "@/libs/gql/graphql";
import { useEffect, useReducer } from "react";
import { LoadMoreTweetButton } from "./LoadMoreTweetButton";
import { PostTweetForm } from "./PostTweetForm";
import { emptyState, reducer } from "./TimelineReducerDesign";
import { useSignInState } from "../auth/authHooks";

const queryDefinition = graphql(/* GraphQL */ `
  query TimeLinePageQuery($currentTime: Time!) {
    timeline(currentTime: $currentTime) {
      ...TimelineTweetFragment
      id
    }
  }
`);

interface FirebaseConfig {
  apiKey: string | undefined;
  authDomain: string | undefined;
  projectId: string | undefined;
}

interface Props {
  firebaseConfig: FirebaseConfig;
}

export const TweetTimelineView = (props: Props) => {
  // console.log(print(queryDefinition));
  const initialTime = "2023-08-18T09:30:10.000Z" as TimeString; // "2023-08-18T09:30:10.000Z" is known to be a good TimeString
  const [state, dispatch] = useReducer(reducer, emptyState());

  async function loadNewTweets(currentTime: TimeString) {
    const url = "http://localhost:8080/query";
    const variables = { currentTime: currentTime };

    // authentication via cookies, so http header 'Authorization' is not passed
    const client = new GraphQLClient(url, { credentials: "include" });
    const queryResult = await client.request(queryDefinition, variables);
    dispatch({ actionType: "LOAD_NEWER_TWEETS", queryResult: queryResult });
  }

  const signInState = useSignInState(props.firebaseConfig);

  useEffect(() => {
    const currentTime = toTimeString(initialTime);
    if (!currentTime) return; //TOOD : error handling

    if (signInState.kind !== "WaitingSignIn") {
      // trick to run async function in useEffect
      (async () => {
        await loadNewTweets(currentTime);
      })();
    }
  }, [signInState]);

  return (
    <div className={styles.column}>
      <LoadMoreTweetButton
        loadNewTweets={loadNewTweets}
        initialTime={initialTime}
      />
      <PostTweetForm dispatch={dispatch} />
      {state.queryResult?.timeline &&
        state.queryResult.timeline.map((tweet) => (
          <TweetView key={tweet.id} fragment={tweet} dispatch={dispatch} />
        ))}
    </div>
  );
};
