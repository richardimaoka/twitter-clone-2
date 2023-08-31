import { TweetColumn } from "./components/thread/TweetColumn";
import { graphql } from "@/libs/gql";
// import { print } from "graphql";

import { request, gql } from "graphql-request";
import { useEffect } from "react";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery {
    tweet {
      ...TweetColumnFragment
    }
  }
`);

export default async function Home() {
  const data = await request("http://localhost:8080/query", queryDefinition);
  console.log(data);

  return <main>{data.tweet && <TweetColumn fragment={data.tweet} />}</main>;
}
