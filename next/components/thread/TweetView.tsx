import styles from "./style.module.css";

import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Reactions } from "./reactions/Reactions";
import { Body } from "./root/Body";
import { Picture } from "./root/Picture";
import { ContentHeader } from "./root/ContentHeader";
import { ContentBottom } from "./root/ContentBottom";
// import { TweetStats } from "./TweetStats";

const fragmentDefinition = graphql(`
  fragment TweetFragment on Tweet {
    ...ContentHeader
    ...ContentBottom
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
      <ContentHeader fragment={fragment} />
      <Body fragment={fragment} />
      <Picture fragment={fragment} />
      <ContentBottom fragment={fragment} />
      {/* <TweetStats fragment={fragment} /> */}
      <Reactions fragment={fragment} />
    </div>
  );
};
