import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export function XLogoWrapper() {
  return (
    <div className={styles.xLogoWrapper}>
      <Link href="/home">
        <Image src="/images/x.svg" width={30} height={30} alt={"xlogo"} />
      </Link>
    </div>
  );
}
