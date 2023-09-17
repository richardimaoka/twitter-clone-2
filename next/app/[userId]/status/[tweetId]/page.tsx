import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import styles from "./style.module.css";

import { TweetColumn } from "@/components/thread/TweetColumn";
import { graphql } from "@/libs/gql";
import { request } from "graphql-request";
// import { print } from "graphql";

const queryDefinition = graphql(/* GraphQL */ `
  query StatusPageQuery {
    tweet {
      ...TweetColumnFragment
    }
    me {
      userName
    }
  }
`);

export default async function Page() {
  const data = await request("http://localhost:8080/query", queryDefinition);
  return (
    <div className={styles.home}>
      <section className={styles.leftPane}>
        <LeftPane />
      </section>
      <main>{data.tweet && <TweetColumn fragment={data.tweet} />}</main>
      <section className={styles.rightPane}>
        <RightPane />
      </section>
    </div>
  );
}
