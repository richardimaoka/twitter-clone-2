import { LiveEvent } from "./LiveEvent";
import { WhatsHappening } from "./WhatsHappening";

export function TrendingPanel() {
  return (
    <div>
      <WhatsHappening />
      <LiveEvent />
      <div>Promotion</div>
      <div>Trend 1</div>
      <div>Trend 2</div>
      <div>Trend 3</div>
      <div>更に表示</div>
    </div>
  );
}
