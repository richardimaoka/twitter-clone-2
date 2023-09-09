import { TimeString } from "@/libs/gql/graphql";
import { fromDateToTimeString, toTimeString } from "@/libs/gql/timeString";
import { useEffect, useState } from "react";

interface Props {
  initialTime: TimeString;
  loadNewTweets: (currentTime: TimeString) => Promise<void>;
}

export function LoadMoreTweetButton(props: Props) {
  const [currentTimeStr, setCurrentTime] = useState<string>(""); //needs to be string, to set an initial value

  useEffect(() => {
    setCurrentTime(props.initialTime);
  }, [props.initialTime]);

  const incrementTime = async () => {
    const currentTime = toTimeString(currentTimeStr);

    // TODO: error handling?
    // supposedly this can never happen tho
    if (!currentTime) return;

    const currentTimeDate = new Date(currentTime);
    const y = currentTimeDate.getFullYear(),
      m = currentTimeDate.getMonth(),
      d = currentTimeDate.getDate(),
      h = currentTimeDate.getHours() + 1,
      min = currentTimeDate.getMinutes(),
      s = currentTimeDate.getSeconds();

    const updatedTime = new Date(y, m, d, h, min, s);

    //TODO: error handling
    await props.loadNewTweets(fromDateToTimeString(updatedTime));
    setCurrentTime(fromDateToTimeString(updatedTime));
  };

  return (
    <div>
      <button type="button" onClick={incrementTime}>
        最新ツイートを表示
      </button>
    </div>
  );
}
