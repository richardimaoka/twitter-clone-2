import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./ContentHeader.module.css";

const fragmentDefinition = graphql(`
  fragment ReplyContentHeader on Tweet {
    user {
      userName
      userId
    }
    date
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function ContentHeader(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.header}>
      {fragment.user && (
        <div className={styles.username}>{fragment.user.userName}</div>
      )}
      {fragment.user && (
        <div className={styles.userid}>{`@${fragment.user.userId}`}</div>
      )}
      <div className={styles.userid}>{fragment.date}</div>
    </div>
  );
}
