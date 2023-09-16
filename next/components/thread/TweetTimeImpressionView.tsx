import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./style.module.css";

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
    <div className={styles.time}>
      {fragment.time}
      {fragment.date && `· ${fragment.date}`}
      {fragment.impressions && `· ${fragment.impressions} 回の表示`}
    </div>
  );
};
