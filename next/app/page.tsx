import { graphql } from "@/libs/gql";
import { isLoggedInServerSide } from "@/libs/serverAuth";
import { request } from "graphql-request";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TweetColumn } from "../components/thread/TweetColumn";
// import { print } from "graphql";

const queryDefinition = graphql(/* GraphQL */ `
  query RootPageQuery {
    ...TweetColumnFragment
  }
`);

export default async function Home() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get("session");

  const isLoggedIn = await isLoggedInServerSide(sessionCookie?.value);
  if (!isLoggedIn) {
    redirect("/login");
  }

  const data = await request("http://localhost:8080/query", queryDefinition);
  return <main>{data && <TweetColumn fragment={data} />}</main>;
}
