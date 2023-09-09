import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

export function SearchBox() {
  return (
    <div>
      <form action="#">
        <div className={styles.searchBox}>
          <div>
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
          </div>
          <input className={styles.searchInputArea} placeholder="検索" />
        </div>
      </form>
    </div>
  );
}
