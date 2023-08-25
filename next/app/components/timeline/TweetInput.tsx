import { graphql } from "@/libs/gql";
import { useMutation } from "@apollo/client";
import Image from "next/image";

const definition = graphql(/* GraphQL */ `
  mutation postTw($body: String!) {
    postTweet(body: $body) {
      body
    }
  }
`);

export const TweetInput = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(definition);

  return (
    <div>
      <Image
        src="/images/richard-profile.jpg"
        alt="my profile"
        width={40}
        height={40}
      />
      <input type="text" placeholder="いまどうしてる？" />
      <button
        onClick={(e) => mutateFunction({ variables: { body: "hello world" } })}
      >
        ツイートする
      </button>
    </div>
  );
};
