import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemAuthenticated() {
  return <MenuItem href="/search" icon={faX} text="話題を検索" />;
}
