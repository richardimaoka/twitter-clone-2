import styles from "./style.module.css";

export function TrendItem() {
  return (
    <div className={styles.trendingItem}>
      <div className={styles.trendingItemTrend}>ラトビアのトレンド</div>
      <div className={styles.trendingItemName}>Neko</div>
      <div className={styles.trendingItemPosts}>81,175 posts</div>
    </div>
  );
}
