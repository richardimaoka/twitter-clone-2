import { TweetColumn } from "./components/TweetColumn";
import { getClient } from "@/libs/apolloClient";
import { graphql } from "@/libs/gql";
import { print } from "graphql";
import { TweetTimelineView } from "./components/TweetTimeline";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery {
    ...TweetTimelineFragment
  }
`);

export default async function Home() {
  // console.log(print(queryDefinition));

  const { data } = await getClient().query({
    query: queryDefinition,
  });

  return <main>{data && <TweetTimelineView fragment={data} />}</main>;
}
