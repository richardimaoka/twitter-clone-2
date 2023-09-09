import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./style.module.css";

export function MenuItemSearch() {
  return (
    <div>
      <Link href="/home">
        <div className={styles.menuItem}>
          <div>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faMagnifyingGlass}
              fixedWidth
            />
          </div>
          <div>話題を検索</div>
        </div>
      </Link>
    </div>
  );
}
