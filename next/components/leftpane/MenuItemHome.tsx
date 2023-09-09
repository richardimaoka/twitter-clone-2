import { faHome } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "./MenuItem";

export function MenuItemHome() {
  return <MenuItem href="/home" icon={faHome} text="ホーム" />;
}
