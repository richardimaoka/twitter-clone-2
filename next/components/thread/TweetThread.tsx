import { TweetReply } from "./TweetReply";
import { RootTweet } from "./root/RootTweet";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetThreadFragment on Tweet {
    ...RootTweet
    replies {
      ...TweetReplyFragment
    }
  }
`);

interface TweetThreadProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetThread = (props: TweetThreadProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <>
      <RootTweet fragment={fragment} />
      {fragment.replies?.map(
        (reply, index) => reply && <TweetReply key={index} fragment={reply} />
      )}
    </>
  );
};
