"use client";

import { graphql } from "@/libs/gql";
import { print } from "graphql";
import { TweetTimelineView } from "@/app/components/timeline/TweetTimeline";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery {
    ...TweetTimelineFragment
  }
`);

export default function Home() {
  // console.log(print(queryDefinition));
  const { data, fetchMore } = useSuspenseQuery(queryDefinition);

  return (
    <main>
      <button onClick={() => fetchMore({})}>recent tweets</button>
      {data && <TweetTimelineView fragment={data} />}
    </main>
  );
}
