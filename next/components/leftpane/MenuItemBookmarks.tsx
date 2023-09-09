import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemBookmarks() {
  return <MenuItem href="/search" icon={faBookmark} text="ブックマーク" />;
}
