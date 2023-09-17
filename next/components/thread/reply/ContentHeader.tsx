import { FragmentType, graphql, useFragment } from "@/libs/gql";
import styles from "./ContentHeader.module.css";

const fragmentDefinition = graphql(`
  fragment ReplyContentHeader on Tweet {
    userName
    userId
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
      <div className={styles.username}>{fragment.userName}</div>
      <div className={styles.userid}>&#064;{fragment.userId}</div>
      <div className={styles.userid}>&#064;{fragment.date}</div>
    </div>
  );
}
