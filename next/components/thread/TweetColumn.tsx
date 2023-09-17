import { TweetReply } from "./TweetReply";
import { ReplyForm } from "./reply/ReplyForm";
import { RootTweet } from "./root/RootTweet";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetColumnFragment on Query {
    tweet {
      ...RootTweet
      replies {
        ...TweetReplyFragment
      }
    }
    me {
      ...ReplyForm
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
      {/* TODO: to render error.tsx on missing fragment.tweet, move this under /app dir */}
      {fragment.tweet && <RootTweet fragment={fragment.tweet} />}
      {fragment.me && <ReplyForm fragment={fragment.me} />}
      {fragment.tweet?.replies?.map(
        (reply, index) => reply && <TweetReply key={index} fragment={reply} />
      )}
    </div>
  );
};
