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

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetActions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

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
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
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
