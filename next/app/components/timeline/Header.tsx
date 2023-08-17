import styles from "./style.module.css";
import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TimelineHeaderFragment on Tweet {
    userName
    userId
    date
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const Header = (props: Props) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div className={styles.header}>
      <span className={styles.username}>{fragment.userName}</span>
      <span className={styles.userid}>&#064;{fragment.userId}</span>
      <span>&#183;</span>
      <span className={styles.date}>{fragment.date}</span>
    </div>
  );
};
