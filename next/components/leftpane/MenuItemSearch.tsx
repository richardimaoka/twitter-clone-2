import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemSearch() {
  return <MenuItem href="/search" icon={faSearch} text="話題を検索" />;
}
