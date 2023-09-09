import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { MenuItem } from "./MenuItem";

interface Props {
  userName: string;
}

export function MenuItemLists(props: Props) {
  return (
    <MenuItem
      href={`${props.userName}/lists`}
      icon={faFileLines}
      text="リスト"
    />
  );
}
