import { LiveEvent } from "./LiveEvent";
import { PromotedHashTag } from "./PromotedHashTag";
import { TrendItem } from "./TrendItem";
import { WhatsHappening } from "./WhatsHappening";

export function TrendingPanel() {
  return (
    <div>
      <WhatsHappening />
      <LiveEvent />
      <PromotedHashTag />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <div>更に表示</div>
    </div>
  );
}
