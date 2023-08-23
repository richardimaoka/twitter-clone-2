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
        keyArgs: ["currentTime"],
        read(existing, { args }) {
          console.log(
            "read existing - ",
            existing,
            "currentTime",
            args && args.currentTime
          );
          return existing;
        },
        merge(existing, incoming) {
          // Slicing is necessary because the existing data is
          // immutable, and frozen in development.
          console.log(
            "merge called, existing = ",
            existing,
            "incoming = ",
            incoming
          );
          if (existing) {
            return [...existing, ...incoming];
          } else {
            return incoming;
          }
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
