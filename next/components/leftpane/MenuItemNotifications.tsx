import { faBell } from "@fortawesome/free-regular-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemNotifications() {
  return <MenuItem href="/notifications" icon={faBell} text="通知" />;
}
