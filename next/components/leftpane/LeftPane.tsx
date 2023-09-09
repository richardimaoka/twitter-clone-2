import Image from "next/image";
import { SearchButton } from "./SearchButton";
import Link from "next/link";

export function LeftPane() {
  return (
    <div>
      <div>
        <Link href="/home">
          <Image src="/images/x.svg" width={30} height={30} alt={"xlogo"} />
        </Link>
      </div>
      <SearchButton />
    </div>
  );
}
