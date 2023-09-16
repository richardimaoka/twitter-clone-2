/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query RootPageQuery {\n    tweet {\n      ...TweetColumnFragment\n    }\n  }\n":
    types.RootPageQueryDocument,
  "\n  fragment TweetColumnFragment on Tweet {\n    ...TweetThreadFragment\n  }\n":
    types.TweetColumnFragmentFragmentDoc,
  "\n  fragment TweetReplyFragment on Tweet {\n    userName\n    userId\n    profilePicture\n    body\n    date\n    retweets\n    quotes\n    numLikes\n  }\n":
    types.TweetReplyFragmentFragmentDoc,
  "\n  fragment TweetThreadFragment on Tweet {\n    ...TweetFragment\n    replies {\n      ...TweetReplyFragment\n    }\n  }\n":
    types.TweetThreadFragmentFragmentDoc,
  "\n  fragment TweetThreadHeaderFragment on Tweet {\n    userName\n    userId\n    profilePicture\n  }\n":
    types.TweetThreadHeaderFragmentFragmentDoc,
  "\n  fragment TweetTimeImpressionFragment on Tweet {\n    time\n    date\n    impressions\n  }\n":
    types.TweetTimeImpressionFragmentFragmentDoc,
  "\n  fragment TweetFragment on Tweet {\n    ...TweetThreadHeaderFragment\n    ...TweetTimeImpressionFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n":
    types.TweetFragmentFragmentDoc,
  "\n  fragment TimelineHeaderFragment on Tweet {\n    userName\n    userId\n    date\n  }\n":
    types.TimelineHeaderFragmentFragmentDoc,
  "\n  mutation postTw($body: String!) {\n    postTweet(body: $body) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n":
    types.PostTwDocument,
  "\n  fragment TimelineProfilePicFragment on Tweet {\n    profilePicture\n  }\n":
    types.TimelineProfilePicFragmentFragmentDoc,
  "\n  fragment TimelineTweetActionsFragment on Tweet {\n    id\n    retweets\n    numLikes\n    bookmarks\n    replies {\n      __typename\n    }\n    impressions\n  }\n":
    types.TimelineTweetActionsFragmentFragmentDoc,
  "\n  mutation likeTw($id: ID!) {\n    like(tweetId: $id) {\n      id\n      numLikes\n    }\n  }\n":
    types.LikeTwDocument,
  "\n  query TimeLinePageQuery($currentTime: Time!) {\n    timeline(currentTime: $currentTime) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n":
    types.TimeLinePageQueryDocument,
  "\n  fragment TimelineTweetFragment on Tweet {\n    ...TimelineProfilePicFragment\n    ...TimelineHeaderFragment\n    ...TimelineTweetActionsFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    timeStamp\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n":
    types.TimelineTweetFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query RootPageQuery {\n    tweet {\n      ...TweetColumnFragment\n    }\n  }\n",
): (typeof documents)["\n  query RootPageQuery {\n    tweet {\n      ...TweetColumnFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetColumnFragment on Tweet {\n    ...TweetThreadFragment\n  }\n",
): (typeof documents)["\n  fragment TweetColumnFragment on Tweet {\n    ...TweetThreadFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetReplyFragment on Tweet {\n    userName\n    userId\n    profilePicture\n    body\n    date\n    retweets\n    quotes\n    numLikes\n  }\n",
): (typeof documents)["\n  fragment TweetReplyFragment on Tweet {\n    userName\n    userId\n    profilePicture\n    body\n    date\n    retweets\n    quotes\n    numLikes\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetThreadFragment on Tweet {\n    ...TweetFragment\n    replies {\n      ...TweetReplyFragment\n    }\n  }\n",
): (typeof documents)["\n  fragment TweetThreadFragment on Tweet {\n    ...TweetFragment\n    replies {\n      ...TweetReplyFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetThreadHeaderFragment on Tweet {\n    userName\n    userId\n    profilePicture\n  }\n",
): (typeof documents)["\n  fragment TweetThreadHeaderFragment on Tweet {\n    userName\n    userId\n    profilePicture\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetTimeImpressionFragment on Tweet {\n    time\n    date\n    impressions\n  }\n",
): (typeof documents)["\n  fragment TweetTimeImpressionFragment on Tweet {\n    time\n    date\n    impressions\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TweetFragment on Tweet {\n    ...TweetThreadHeaderFragment\n    ...TweetTimeImpressionFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n",
): (typeof documents)["\n  fragment TweetFragment on Tweet {\n    ...TweetThreadHeaderFragment\n    ...TweetTimeImpressionFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TimelineHeaderFragment on Tweet {\n    userName\n    userId\n    date\n  }\n",
): (typeof documents)["\n  fragment TimelineHeaderFragment on Tweet {\n    userName\n    userId\n    date\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation postTw($body: String!) {\n    postTweet(body: $body) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation postTw($body: String!) {\n    postTweet(body: $body) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TimelineProfilePicFragment on Tweet {\n    profilePicture\n  }\n",
): (typeof documents)["\n  fragment TimelineProfilePicFragment on Tweet {\n    profilePicture\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TimelineTweetActionsFragment on Tweet {\n    id\n    retweets\n    numLikes\n    bookmarks\n    replies {\n      __typename\n    }\n    impressions\n  }\n",
): (typeof documents)["\n  fragment TimelineTweetActionsFragment on Tweet {\n    id\n    retweets\n    numLikes\n    bookmarks\n    replies {\n      __typename\n    }\n    impressions\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation likeTw($id: ID!) {\n    like(tweetId: $id) {\n      id\n      numLikes\n    }\n  }\n",
): (typeof documents)["\n  mutation likeTw($id: ID!) {\n    like(tweetId: $id) {\n      id\n      numLikes\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query TimeLinePageQuery($currentTime: Time!) {\n    timeline(currentTime: $currentTime) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n",
): (typeof documents)["\n  query TimeLinePageQuery($currentTime: Time!) {\n    timeline(currentTime: $currentTime) {\n      ...TimelineTweetFragment\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TimelineTweetFragment on Tweet {\n    ...TimelineProfilePicFragment\n    ...TimelineHeaderFragment\n    ...TimelineTweetActionsFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    timeStamp\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n",
): (typeof documents)["\n  fragment TimelineTweetFragment on Tweet {\n    ...TimelineProfilePicFragment\n    ...TimelineHeaderFragment\n    ...TimelineTweetActionsFragment\n    body\n    picturePath\n    pictureWidth\n    pictureHeight\n    time\n    date\n    timeStamp\n    retweets\n    quotes\n    numLikes\n    bookmarks\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
