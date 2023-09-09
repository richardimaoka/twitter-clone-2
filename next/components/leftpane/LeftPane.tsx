import Image from "next/image";
import Link from "next/link";
import { MenuItemHome } from "./MenuItemHome";
import { MenuItemSearch } from "./MenuItemSearch";
import { MenuItemNotifications } from "./MenuItemNotifications";
import { MenuItemMessages } from "./MenuItemMessages";
import { MenuItemLists } from "./MenuItemLists";
import { MenuItemBookmarks } from "./MenuItemBookmarks";
import { MenuItemAuthenticated } from "./MenuItemAuthenticated";
import { MenuItemProfile } from "./MenuItemProfile";

export function LeftPane() {
  return (
    <div>
      <div>
        <Link href="/home">
          <Image src="/images/x.svg" width={30} height={30} alt={"xlogo"} />
        </Link>
      </div>
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
