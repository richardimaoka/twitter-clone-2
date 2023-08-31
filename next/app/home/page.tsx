import { graphql } from "@/libs/gql";
import { request } from "graphql-request";
import { TimeString } from "@/libs/gql/graphql";
import { TweetView } from "../components/timeline/TweetView";
import styles from "./style.module.css";

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
      <div className={styles.column}>
        {data.timeline &&
          data.timeline.map((tweet) => (
            <TweetView key={tweet.id} fragment={tweet} />
          ))}
      </div>
    </main>
  );
}
