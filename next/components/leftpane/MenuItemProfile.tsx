import { faUser } from "@fortawesome/free-regular-svg-icons";
import { MenuItem } from "./MenuItem";

interface Props {
  userName: string;
}

export function MenuItemProfile(props: Props) {
  return <MenuItem href={props.userName} icon={faUser} text="プロフィール" />;
}
