import styles from "./style.module.css";
import Image from "next/image";

export const TweetView = () => {
  //https://twitter.com/TwitterJP/status/1570218396775481344
  return (
    <div className={styles.tweet}>
      <div className={styles.header}>
        <div>
          <Image
            src="/images/twitter.jpg"
            width={40}
            height={40}
            alt={"user profile pic"}
          />
        </div>
        <div>
          <div>Japan</div>
          <div>&#064;TwitterJP</div>
        </div>
      </div>
      <div className={styles.body}>
        今日から４日間ゲームのことしか考えないと決めたので、ヘッダーもゲーム仕様にしてみました
      </div>
      <div className={styles.bottom}>午前10:10 · 2022年9月15日</div>
    </div>
  );
};
