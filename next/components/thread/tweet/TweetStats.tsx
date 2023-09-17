import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./TweetStats.module.css";

const fragmentDefinition = graphql(`
  fragment TweetStatsFragment on Tweet {
    numRetweets
    numQuotes
    numLikes
    numBookmarks
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetStats = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.component}>
      <div>
        <span className={styles.reactionvalue}>{fragment.numRetweets}</span>
        <span className={styles.reactionname}> 件のリツイート</span>
      </div>
      <div>
        <span className={styles.reactionvalue}>{fragment.numQuotes}</span>
        <span className={styles.reactionname}> 件の引用</span>
      </div>
      <div>
        <span className={styles.reactionvalue}>{fragment.numLikes}</span>
        <span className={styles.reactionname}> 件のいいね</span>
      </div>
      <div>
        <span className={styles.reactionvalue}>{fragment.numBookmarks}</span>
        <span className={styles.reactionname}> ブックマーク</span>
      </div>
    </div>
  );
};
