import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ContentHeader } from "./ContentHeader";
import { ContentBody } from "./ContentBody";
import { Reactions } from "../reactions/Reactions";
import styles from "./TweetView.module.css";
import { ProfilePicture } from "../profile/ProfilePicture";

const fragmentDefinition = graphql(`
  fragment TweetView on Tweet {
    ...ReplyContentHeader
    ...ReplyContentBody
    ...Reactions
    user {
      ...ProfilePicture
    }
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function TweetView(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  return (
    <div className={styles.component}>
      <div className={styles.left}>
        {fragment.user && <ProfilePicture fragment={fragment.user} />}
      </div>
      <div>
        <ContentHeader fragment={fragment} />
        <ContentBody fragment={fragment} />
        <Reactions fragment={fragment} />
      </div>
    </div>
  );
}
