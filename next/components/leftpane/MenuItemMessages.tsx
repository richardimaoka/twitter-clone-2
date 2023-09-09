import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemMessages() {
  return <MenuItem href="/messages" icon={faMessage} text="メッセージ" />;
}
