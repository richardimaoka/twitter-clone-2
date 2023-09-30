"use client";
import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import request from "graphql-request";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const fragmentDefinition = graphql(`
  fragment LikeButton on Tweet {
    id
    numLikes
  }
`);

const mutationDefinition = graphql(/* GraphQL */ `
  mutation likeTw($id: ID!) {
    like(tweetId: $id) {
      id
      numLikes
    }
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function LikeButton(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const [isInitialized, setIsInitialized] = useState(false); // technique to avoid flickering
  const [numLikes, setNumLikes] = useState(0);

  useEffect(() => {
    if (fragment.numLikes) {
      setNumLikes(fragment.numLikes);
      setIsInitialized(true);
    }
  }, [fragment.numLikes]);

  async function likeTweet() {
    console.log("likeTweet");
    const url = "http://localhost:8080/query";
    const variables = { id: fragment.id };
    const result = await request(url, mutationDefinition, variables);
    if (result.like?.id && result.like?.numLikes) {
      setNumLikes(result.like.numLikes);
      setIsInitialized(true);
    }
  }

  return (
    <div>
      <button className={styles.button} onClick={likeTweet}>
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        {isInitialized ? (
          <span className={styles.counts}>{numLikes}</span>
        ) : (
          <span className={styles.counts}>{fragment.numLikes}</span>
        )}
      </button>
      <input type="hidden" name="tweetId" value={fragment.id} />
    </div>
  );
}
