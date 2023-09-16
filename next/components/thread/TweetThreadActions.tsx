import { FragmentType, graphql, useFragment } from "@/libs/gql";
import {
  faArrowUpFromBracket,
  faBookmark,
  faComment,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TweetThreadActions.module.css";
import { TweetThreadActionItem } from "./TweetThreadActionItem";

const fragmentDefinition = graphql(`
  fragment TweetThreadActionsFragment on Tweet {
    retweets
    quotes
    numLikes
    bookmarks
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetThreadActions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.component}>
      <TweetThreadActionItem value={0} icon={faComment} />
      <TweetThreadActionItem value={fragment.retweets} icon={faRetweet} />
      <TweetThreadActionItem value={fragment.numLikes} icon={faHeart} />
      <TweetThreadActionItem value={fragment.bookmarks} icon={faBookmark} />
      <TweetThreadActionItem value={0} icon={faArrowUpFromBracket} />
    </div>
  );
};
