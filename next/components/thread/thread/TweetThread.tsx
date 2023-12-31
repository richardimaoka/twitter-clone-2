import { TweetView } from "../tweet/TweetView";
import { ReplyForm } from "../threadreply/ReplyForm";
import { ThreadRootView } from "../threadroot/ThreadRootView";
import styles from "./TweetThread.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetThread on Query {
    tweet(tweetId: "") {
      ...ThreadRootView
      replies {
        ...TweetView
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

export const TweetThread = (props: TweetColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.column}>
      {/* TODO: to render error.tsx on missing fragment.tweet, move this under /app dir */}
      {fragment.tweet && <ThreadRootView fragment={fragment.tweet} />}
      {fragment.me && <ReplyForm fragment={fragment.me} />}
      {fragment.tweet?.replies?.map(
        (reply, index) => reply && <TweetView key={index} fragment={reply} />
      )}
    </div>
  );
};
