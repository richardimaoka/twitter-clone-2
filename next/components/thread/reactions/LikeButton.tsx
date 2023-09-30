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

  return (
    <div>
      <button className={styles.button}>
        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
        {fragment.numLikes && fragment.numLikes > 0 && (
          <span className={styles.counts}>{fragment.numLikes}</span>
        )}
      </button>
      <input type="hidden" name="tweetId" value={fragment.id} />
    </div>
  );
}
