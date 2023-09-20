import styles from "./RootTweet.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Reactions } from "../reactions/Reactions";
import { Body } from "./Body";
import { Picture } from "./Picture";
import { ContentHeader } from "./ContentHeader";
import { ContentBottom } from "./ContentBottom";
// import { TweetStats } from "./TweetStats";

const fragmentDefinition = graphql(`
  fragment RootTweet on Tweet {
    ...ContentHeader
    ...ContentBottom
    ...Reactions
    ...Picture
    ...Body
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const RootTweet = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  //https://twitter.com/TwitterJP/status/1570218396775481344
  //https://twitter.com/TwitterJP/status/1587301348604841987
  return (
    <div className={styles.tweet}>
      <ContentHeader fragment={fragment} />
      <Body fragment={fragment} />
      <Picture fragment={fragment} />
      <ContentBottom fragment={fragment} />
      {/* <TweetStats fragment={fragment} /> */}
      <Reactions fragment={fragment} />
    </div>
  );
};
