import { graphql } from "@/libs/gql";
import styles from "./style.module.css";
import { request } from "graphql-request";
import { TweetView } from "../components/timeline/TweetView";
import { TimeString } from "@/libs/gql/graphql";

const queryDefinition = graphql(/* GraphQL */ `
  query HomePageQuery($currentTime: Time!) {
    timeline(currentTime: $currentTime) {
      ...TimelineTweetFragment
      id
    }
  }
`);

export default async function Page() {
  const initialTime = "2023-08-18T09:30:10.000Z" as TimeString; //workaround - we need a TimeString constant, or any sure way to get TimeString prop
  const data = await request("http://localhost:8080/query", queryDefinition, {
    currentTime: initialTime,
  });

  return (
    <main>
      {data.timeline && (
        <div className={styles.column}>
          {data.timeline.map((tweet) => (
            <div key={tweet.id}>{tweet.id}</div>
          ))}
        </div>
      )}
    </main>
  );
}
