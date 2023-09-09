import Image from "next/image";
import Link from "next/link";
import { HomeButton } from "./HomeButton";
import { SearchButton } from "./SearchButton";

export function LeftPane() {
  return (
    <div>
      <div>
        <Link href="/home">
          <Image src="/images/x.svg" width={30} height={30} alt={"xlogo"} />
        </Link>
      </div>
      <HomeButton />
      <SearchButton />
    </div>
  );
}
