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
import { useMutation } from "@apollo/client";

const fragmentDefinition = graphql(`
  fragment TimelineTweetActionsFragment on Tweet {
    tweetId
    retweets
    likes
    bookmarks
    replies {
      __typename
    }
    impressions
  }
`);

const mutationDefinition = graphql(/* GraphQL */ `
  mutation likeTw($tweetId: ID!) {
    like(tweetId: $tweetId) {
      tweetId
      likes
    }
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetActions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const [mutateFunction] = useMutation(mutationDefinition);
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (fragment.tweetId) {
      mutateFunction({ variables: { tweetId: fragment.tweetId } });
    }
  };

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
        <button onClick={onClick}>
          <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        </button>
        <span className={styles.reactionvalue}>{fragment.likes}</span>
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
