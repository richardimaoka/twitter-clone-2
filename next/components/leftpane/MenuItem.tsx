import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import Link from "next/link";

interface Props {
  icon: IconDefinition;
  text: string;
  href: string;
}

export function MenuItem(props: Props) {
  return (
    <div>
      <Link href={props.href}>
        <div className={styles.menuItem}>
          <div>
            <FontAwesomeIcon
              className={styles.icon}
              icon={props.icon}
              fixedWidth
            />
          </div>
          <div>{props.text}</div>
        </div>
      </Link>
    </div>
  );
}
