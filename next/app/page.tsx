import { graphql } from "@/libs/gql";
import { TweetColumn } from "../components/thread/TweetColumn";
// import { print } from "graphql";

import { request } from "graphql-request";

const queryDefinition = graphql(/* GraphQL */ `
  query RootPageQuery {
    ...TweetColumnFragment
  }
`);

export default async function Home() {
  const data = await request("http://localhost:8080/query", queryDefinition);
  return <main>{data && <TweetColumn fragment={data} />}</main>;
}
