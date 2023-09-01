import styles from "./style.module.css";

import {
  faArrowUpFromBracket,
  faChartColumn,
  faComment,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Action } from "./TimelineReducerDesign";
import { request } from "graphql-request";

const fragmentDefinition = graphql(`
  fragment TimelineTweetActionsFragment on Tweet {
    id
    retweets
    numLikes
    bookmarks
    replies {
      __typename
    }
    impressions
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
  dispatch: (action: Action) => void;
}

export const TweetActions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  async function likeTweet() {
    console.log("likeTweet");
    const url = "http://localhost:8080/query";
    const variables = { id: fragment.id };
    const result = await request(url, mutationDefinition, variables);
    if (result.like?.id && result.like?.numLikes) {
      props.dispatch &&
        props.dispatch({
          actionType: "UPDATE_LIKE",
          tweetId: result.like.id,
          numLikes: result.like.numLikes,
        });
    }
  }

  return (
    <div className={styles.actions}>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faComment} />
        <span className={styles.reactionvalue}>
          {fragment.replies ? fragment.replies.length : ""}
        </span>
      </div>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
        <span className={styles.reactionvalue}>{fragment.retweets}</span>
      </div>
      <div>
        <button onClick={likeTweet}>
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        </button>
        <span className={styles.reactionvalue}>{fragment.numLikes}</span>
      </div>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faChartColumn} />
        <span className={styles.reactionvalue}>{fragment.impressions}</span>
      </div>
      <div>
        <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
      </div>
    </div>
  );
};
