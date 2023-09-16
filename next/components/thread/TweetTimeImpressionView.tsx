import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./TweetTimeImpressionView.module.css";

const fragmentDefinition = graphql(`
  fragment TweetTimeImpressionFragment on Tweet {
    time
    date
    impressions
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetTimeImpressionView = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.component}>
      {fragment.time}
      {fragment.date && `· ${fragment.date}`}
      {fragment.impressions && (
        <>
          <span>·</span>
          <span className={styles.emphasize}>{fragment.impressions}</span>
          <span>回の表示</span>
        </>
      )}
    </div>
  );
};
