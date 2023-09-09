import { graphql } from "@/libs/gql";
import { Action } from "./TimelineReducerDesign";
import { request } from "graphql-request";
import Image from "next/image";
import { FormEventHandler, useState } from "react";

const definition = graphql(/* GraphQL */ `
  mutation postTw($body: String!) {
    postTweet(body: $body) {
      ...TimelineTweetFragment
      id
    }
  }
`);

interface Props {
  dispatch: (action: Action) => void;
}

export function PostTweetForm(props: Props) {
  const [body, setBody] = useState<string>("");

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault(); // do not reload the screen

    console.log("onSubmit");
    const url = "http://localhost:8080/query";
    const variables = { body: body };
    const result = await request(url, definition, variables);

    //TODO: error handling
    if (!result.postTweet) return;

    props.dispatch({
      actionType: "ADD_SINGLE_NEW_TWEET",
      tweet: result.postTweet,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Image
          src="/images/richard-profile.jpg"
          alt="my profile"
          width={40}
          height={40}
        />
        <input
          type="text"
          placeholder="いまどうしてる？"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">ツイートする</button>
      </div>
    </form>
  );
}
