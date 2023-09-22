import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { BookmarkButton } from "./BookmarkButton";
import { LikeButton } from "./LikeButton";
import { ReplyButton } from "./ReplyButton";
import { RetweetyButton } from "./RetweetyButton";
import styles from "./style.module.css";
import { ShareButton } from "./ShareButton";

const fragmentDefinition = graphql(`
  fragment Reactions on Tweet {
    id
    numReplies
    numRetweets
    numQuotes
    numLikes
    numBookmarks
    ...LikeButton
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const Reactions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.component}>
      <ReplyButton counts={fragment.numReplies} />
      <RetweetyButton counts={fragment.numRetweets} />
      <LikeButton fragment={fragment} />
      <BookmarkButton counts={fragment.numBookmarks} />
      <ShareButton />
    </div>
  );
};
