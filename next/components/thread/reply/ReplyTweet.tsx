import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ContentHeader } from "./ContentHeader";
import { ContentBody } from "./ContentBody";
import { Reactions } from "../reactions/Reactions";
import styles from "./ReplyTweet.module.css";

const fragmentDefinition = graphql(`
  fragment ReplyTweet on Tweet {
    ...ReplyContentHeader
    ...ReplyContentBody
    ...Reactions
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function ReplyTweet(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div className={styles.component}>
      <div className={styles.left}>LeftColumn</div>
      <div>
        <ContentHeader fragment={fragment} />
        <ContentBody fragment={fragment} />
        <Reactions fragment={fragment} />
      </div>
    </div>
  );
}
