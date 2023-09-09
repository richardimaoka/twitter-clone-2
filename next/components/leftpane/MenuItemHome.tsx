import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import Link from "next/link";

export function MenuItemHome() {
  return (
    <div>
      <Link href="/home">
        <div className={styles.menuItem}>
          <div>
            <FontAwesomeIcon className={styles.icon} icon={faHome} fixedWidth />
          </div>
          <div>ホーム</div>
        </div>
      </Link>
    </div>
  );
}
