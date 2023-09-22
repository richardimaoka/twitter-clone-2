import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

const fragmentDefinition = graphql(`
  fragment LikeButton on Tweet {
    id
    numLikes
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function LikeButton(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <button className={styles.button}>
      <FontAwesomeIcon className={styles.icon} icon={faHeart} />
      {fragment.numLikes && fragment.numLikes > 0 && (
        <span className={styles.counts}>{fragment.numLikes}</span>
      )}
    </button>
  );
}
