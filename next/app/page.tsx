import { TweetColumn } from "./components/TweetColumn";
import { getClient } from "@/libs/apolloClient";
import { graphql } from "@/libs/gql";
import { print } from "graphql";
const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery {
    tweet {
      ...TweetColumnFragment
    }
  }
`);

export default async function Home() {
  console.log(print(queryDefinition));
  const { data } = await getClient().query({
    query: queryDefinition,
  });

  return <main>{data.tweet && <TweetColumn fragment={data.tweet} />}</main>;
}
