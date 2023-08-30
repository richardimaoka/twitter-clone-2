import { graphql } from "@/libs/gql";
import { useMutation } from "@apollo/client";
import Image from "next/image";

const definition = graphql(/* GraphQL */ `
  mutation postTw($body: String!) {
    postTweet(body: $body) {
      id
      userName
      userId
      profilePicture
      body
      picturePath
      pictureWidth
      pictureHeight
      timeStamp
      time
      date
      retweets
      quotes
      numLikes
      bookmarks
      impressions
    }
  }
`);

export const TweetInput = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(definition, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          timeline(existing) {
            const tweetId = data?.postTweet?.id;
            if (!tweetId) {
              return existing;
            }

            const merged = { ...existing };
            merged[tweetId] = data.postTweet;
            return merged;
          },
        },
      });
    },
  });

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
