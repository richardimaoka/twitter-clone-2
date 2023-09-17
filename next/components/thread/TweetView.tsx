import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Reactions } from "./Reactions";
import { Body } from "./tweet/Body";
import { Picture } from "./tweet/Picture";
import { TweetThreadHeader } from "./tweet/TweetThreadHeader";
import { TweetTimeImpression } from "./tweet/TweetTimeImpression";
// import { TweetStats } from "./TweetStats";

const fragmentDefinition = graphql(`
  fragment TweetFragment on Tweet {
    ...TweetThreadHeaderFragment
    ...TweetTimeImpressionFragment
    ...Reactions
    ...Picture
    ...Body
  }
`);

interface TweetViewProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TweetView = (props: TweetViewProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  //https://twitter.com/TwitterJP/status/1570218396775481344
  //https://twitter.com/TwitterJP/status/1587301348604841987
  return (
    <div className={styles.tweet}>
      <TweetThreadHeader fragment={fragment} />
      <Body fragment={fragment} />
      <Picture fragment={fragment} />
      <TweetTimeImpression fragment={fragment} />
      {/* <TweetStats fragment={fragment} /> */}
      <Reactions fragment={fragment} />
    </div>
  );
};
