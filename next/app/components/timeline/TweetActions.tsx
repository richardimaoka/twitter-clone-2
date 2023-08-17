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

const fragmentDefinition = graphql(`
  fragment TimelineTweetActionsFragment on Tweet {
    retweets
    likes
    bookmarks
    replies {
      __typename
    }
    impressions
  }
`);

export const TweetActions = () => (
  <div className={styles.actions}>
    <FontAwesomeIcon className={styles.icon} icon={faComment} />
    <FontAwesomeIcon className={styles.icon} icon={faRetweet} />
    <FontAwesomeIcon className={styles.icon} icon={faHeart} />
    <FontAwesomeIcon className={styles.icon} icon={faChartColumn} />
    <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
  </div>
);
