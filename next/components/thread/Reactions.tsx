import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { BookmarkButton } from "./reactions/BookmarkButton";
import { LikeButton } from "./reactions/LikeButton";
import { ReplyButton } from "./reactions/ReplyButton";
import { RetweetyButton } from "./reactions/RetweetyButton";
import styles from "./Reactions.module.css";
import { ShareButton } from "./reactions/ShareButton";

const fragmentDefinition = graphql(`
  fragment Reactions on Tweet {
    retweets
    quotes
    numLikes
    bookmarks
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const Reactions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.component}>
      <ReplyButton counts={0} />
      <RetweetyButton counts={fragment.retweets} />
      <LikeButton counts={fragment.numLikes} />
      <BookmarkButton counts={fragment.bookmarks} />
      <ShareButton />
    </div>
  );
};
