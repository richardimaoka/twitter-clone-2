import { LeftPane } from "@/components/leftpane/LeftPane";
import { RightPane } from "@/components/rightpane/RightPane";
import { TweetThread } from "@/components/thread/thread/TweetThread";
import { graphql } from "@/libs/gql";
import { ClientError, GraphQLClient, request } from "graphql-request";
import { cookies } from "next/headers";
import styles from "./style.module.css";
// import { print } from "graphql";

const queryDefinition = graphql(/* GraphQL */ `
  query StatusPageQuery {
    ...TweetThread
  }
`);

export default async function Page() {
  const url = "http://localhost:8080/query";
  const cookieStore = cookies();

  // authentication via cookies
  const client = new GraphQLClient(url, {
    headers: { cookie: cookieStore.toString() },
  });

  try {
    const data = await client.request(queryDefinition);
    return (
      <div className={styles.home}>
        <section className={styles.leftPane}>
          <LeftPane />
        </section>
        <main>{data && <TweetThread fragment={data} />}</main>
        <section className={styles.rightPane}>
          <RightPane />
        </section>
      </div>
    );
  } catch (e) {
    //TODO: not found implementation, and separation of not-found from UI logic
    //  https://nextjs.org/docs/app/building-your-application/routing
    //  https://nextjs.org/docs/app/api-reference/file-conventions/not-found
    //  https://nextjs.org/docs/app/api-reference/functions/not-found
    let message = "unknown error";
    if (e instanceof ClientError && e.response.errors)
      message = e.response.errors[0].message;

    return <>{message}</>;
  }
}
