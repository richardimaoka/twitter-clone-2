import Image from "next/image";
import Link from "next/link";
import { MenuItemHome } from "./MenuItemHome";
import { MenuItemSearch } from "./MenuItemSearch";

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
    </div>
  );
}
