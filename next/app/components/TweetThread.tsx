import { TweetView } from "./TweetView";
import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TweetThreadFragment on Tweet {
    ...TweetFragment
    replies {
      ...TweetFragment
    }
  }
`);

interface TweetThreadProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetThread = (props: TweetThreadProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return <TweetView fragment={fragment} />;
};
