import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Reactions } from "../reactions/Reactions";
import { Body } from "./Body";
import { Picture } from "./Picture";
import { ThreadRootBottom } from "./ThreadRootBottom";
import { ThreadRootHeader } from "./ThreadRootHeader";
import styles from "./ThreadRootView.module.css";

const fragmentDefinition = graphql(`
  fragment ThreadRootView on Tweet {
    ...ThreadRootHeader
    ...ThreadRootBottom
    ...Reactions
    ...Picture
    ...Body
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ThreadRootView = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const noProfilePic = "/images/no-profile-egg.png";

  //https://twitter.com/TwitterJP/status/1570218396775481344
  //https://twitter.com/TwitterJP/status/1587301348604841987
  return (
    <div className={styles.tweet}>
      <ThreadRootHeader fragment={fragment} />
      <Body fragment={fragment} />
      <Picture fragment={fragment} />
      <ThreadRootBottom fragment={fragment} />
      {/* <TweetStats fragment={fragment} /> */}
      <Reactions fragment={fragment} />
    </div>
  );
};
