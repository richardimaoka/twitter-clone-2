import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { BookmarkButton } from "./BookmarkButton";
import { LikeButton } from "./LikeButton";
import { ReplyButton } from "./ReplyButton";
import { RetweetyButton } from "./RetweetyButton";
import styles from "./style.module.css";
import { ShareButton } from "./ShareButton";

const fragmentDefinition = graphql(`
  fragment Reactions on Tweet {
    numReplies
    numRetweets
    numQuotes
    numLikes
    numBookmarks
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const Reactions = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  async function like(formData: FormData) {
    "use server";

    // mutate data
    // revalidate cache
  }

  return (
    <form action={like} className={styles.component}>
      <ReplyButton counts={fragment.numReplies} />
      <RetweetyButton counts={fragment.numRetweets} />
      <LikeButton counts={fragment.numLikes} />
      <BookmarkButton counts={fragment.numBookmarks} />
      <ShareButton />
    </form>
  );
};
