import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import request, { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";

const fragmentDefinition = graphql(`
  fragment LikeButton on Tweet {
    id
    numLikes
  }
`);

const mutationDefinition = graphql(/* GraphQL */ `
  mutation likeTw($id: ID!) {
    like(tweetId: $id) {
      id
      numLikes
    }
  }
`);

interface Props {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export function LikeButton(props: Props) {
  const fragment = useFragment(fragmentDefinition, props.fragment);
  const url = "http://localhost:8080/query";
  const cookieStore = cookies();

  // authentication via cookies
  const client = new GraphQLClient(url, {
    headers: { cookie: cookieStore.toString() },
  });

  async function like(formData: FormData) {
    "use server";
    console.log("formData", formData);
    const id = formData.get("tweetId");
    if (!id) {
      throw new Error("id is required");
    } else if (typeof id !== "string") {
      throw new Error("id must be a string");
    }
    const variables = { id: id };
    try {
      const result = await client.request(mutationDefinition, variables);
      // console.log("result", result);
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <form action={like}>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        {fragment.numLikes && fragment.numLikes > 0 && (
          <span className={styles.counts}>{fragment.numLikes}</span>
        )}
      </button>
      <input type="hidden" name="tweetId" value={fragment.id} />
    </form>
  );
}
