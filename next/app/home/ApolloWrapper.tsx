"use client";
// ^ this file needs the "use client" pragma

import { onError } from "@apollo/client/link/error";
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { StrictTypedTypePolicies } from "@/libs/apollo-helpers";
import { Tweet } from "@/libs/gql/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      timeline: {
        keyArgs: false,
        // Return all items stored so far, to avoid ambiguities
        // about the order of the items.
        read(existing) {
          console.log("typePolicies timeline: existing = ", existing);
          if (!existing) return undefined;

          const tweets: Tweet[] = Object.values(existing);
          tweets.sort((a, b) => {
            const aTime = a.timeStamp ? new Date(a.timeStamp).getTime() : 0;
            const bTime = b.timeStamp ? new Date(b.timeStamp).getTime() : 0;
            return aTime - bTime;
          });
          console.log("returning tweets", existing);
          return tweets;
        },
        // While args.cursor may still be important for requesting
        // a given page, it no longer has any role to play in the
        // merge function.
        merge(existing, incoming: Tweet[], { readField }) {
          console.log("typePolicies timeline: merge, existing = ", existing);
          console.log("typePolicies timeline: merge, incoming = ", incoming);
          const merged = { ...existing };
          incoming.forEach((t) => {
            console.log(t);
            if (t.id) {
              merged[t.id] = t;
            }
          });
          console.log("typePolicies timeline: merge, merged = ", merged);
          return merged;
        },
      },
    },
  },
};

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: "http://localhost:8080/query",
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache({
      typePolicies,
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            errorLink,
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
