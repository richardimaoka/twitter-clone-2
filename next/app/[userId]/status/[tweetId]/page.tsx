import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import { TweetColumn } from "@/components/thread/TweetColumn";
import { graphql } from "@/libs/gql";
import { GraphQLClient, request } from "graphql-request";
import { cookies } from "next/headers";
import styles from "./style.module.css";
// import { print } from "graphql";

const queryDefinition = graphql(/* GraphQL */ `
  query StatusPageQuery {
    ...TweetColumnFragment
  }
`);

export default async function Page() {
  const url = "http://localhost:8080/query";
  const cookieStore = cookies();

  // authentication via cookies
  const client = new GraphQLClient(url, {
    headers: { cookie: cookieStore.toString() },
  });

  const data = await client.request(queryDefinition);
  return (
    <div className={styles.home}>
      <section className={styles.leftPane}>
        <LeftPane />
      </section>
      <main>{data && <TweetColumn fragment={data} />}</main>
      <section className={styles.rightPane}>
        <RightPane />
      </section>
    </div>
  );
}
