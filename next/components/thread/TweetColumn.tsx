import { TweetReply } from "./TweetReply";
import { RootTweet } from "./root/RootTweet";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetColumnFragment on Tweet {
    ...RootTweet
    replies {
      ...TweetReplyFragment
    }
  }
`);

interface TweetColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetColumn = (props: TweetColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.column}>
      <RootTweet fragment={fragment} />
      {fragment.replies?.map(
        (reply, index) => reply && <TweetReply key={index} fragment={reply} />
      )}
    </div>
  );
};
