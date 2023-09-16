import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./TweetThreadActionItem.module.css";

interface Props {
  value?: number | null;
  icon: IconDefinition;
}

export function TweetThreadActionItem(props: Props) {
  return <FontAwesomeIcon className={styles.icon} icon={props.icon} />;
}
