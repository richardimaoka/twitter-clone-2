import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { Reactions } from "../reactions/Reactions";
import { TweetBody } from "../body/TweetBody";
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
    ...TweetBody
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ThreadRootView = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  //https://twitter.com/TwitterJP/status/1570218396775481344
  //https://twitter.com/TwitterJP/status/1587301348604841987
  return (
    <div className={styles.tweet}>
      <ThreadRootHeader fragment={fragment} />
      <TweetBody fragment={fragment} />
      <Picture fragment={fragment} />
      <ThreadRootBottom fragment={fragment} />
      <Reactions fragment={fragment} />
    </div>
  );
};
