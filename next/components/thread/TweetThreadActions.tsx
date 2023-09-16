import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { TweetThreadActionItem } from "./TweetThreadActionItem";
import styles from "./TweetThreadActions.module.css";
import { BookmarkButton } from "./reactions/BookmarkButton";
import { LikeButton } from "./reactions/LikeButton";
import { ReplyButton } from "./reactions/ReplyButton";
import { RetweetyButton } from "./reactions/RetweetyButton";

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
      <ReplyButton counts={0} />
      <RetweetyButton counts={fragment.retweets} />
      <LikeButton counts={fragment.numLikes} />
      <BookmarkButton counts={fragment.bookmarks} />
      <TweetThreadActionItem value={0} icon={faArrowUpFromBracket} />
    </div>
  );
};
