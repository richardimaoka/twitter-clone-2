import { MenuItemHome } from "./MenuItemHome";
import { MenuItemSearch } from "./MenuItemSearch";
import { MenuItemNotifications } from "./MenuItemNotifications";
import { MenuItemMessages } from "./MenuItemMessages";
import { MenuItemLists } from "./MenuItemLists";
import { MenuItemBookmarks } from "./MenuItemBookmarks";
import { MenuItemAuthenticated } from "./MenuItemAuthenticated";
import { MenuItemProfile } from "./MenuItemProfile";
import { XLogoWrapper } from "./XLogoWrapper";

export function LeftPane() {
  return (
    <div>
      <XLogoWrapper />
      <MenuItemHome />
      <MenuItemSearch />
      <MenuItemNotifications />
      <MenuItemMessages />
      <MenuItemLists userName="richardimaokajp" />
      <MenuItemBookmarks />
      <MenuItemAuthenticated />
      <MenuItemProfile userName="richardimaokajp" />
    </div>
  );
}
