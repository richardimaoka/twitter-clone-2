import { TweetThread } from "./TweetThread";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetColumnFragment on Tweet {
    ...TweetThreadFragment
  }
`);

interface TweetColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetColumn = (props: TweetColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.column}>
      <TweetThread fragment={fragment} />
    </div>
  );
};
