/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type TimeString = string & {
  /*this type is defined in codegen.ts*/ __timeStringBrand: any;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Time: { input: TimeString; output: TimeString };
};

export type Mutation = {
  __typename: "Mutation";
  like?: Maybe<Tweet>;
  postTweet?: Maybe<Tweet>;
};

export type MutationLikeArgs = {
  tweetId: Scalars["ID"]["input"];
};

export type MutationPostTweetArgs = {
  body: Scalars["String"]["input"];
};

export type Query = {
  __typename: "Query";
  me?: Maybe<User>;
  timeline?: Maybe<Array<Tweet>>;
  tweet?: Maybe<Tweet>;
};

export type QueryTimelineArgs = {
  currentTime: Scalars["Time"]["input"];
};

export type QueryTweetArgs = {
  tweetId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Tweet = {
  __typename: "Tweet";
  body?: Maybe<Scalars["String"]["output"]>;
  bookmarks?: Maybe<Scalars["Int"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  impressions?: Maybe<Scalars["Int"]["output"]>;
  numBookmarks?: Maybe<Scalars["Int"]["output"]>;
  numImpressions?: Maybe<Scalars["Int"]["output"]>;
  numLikes?: Maybe<Scalars["Int"]["output"]>;
  numQuotes?: Maybe<Scalars["Int"]["output"]>;
  numReplies?: Maybe<Scalars["Int"]["output"]>;
  numRetweets?: Maybe<Scalars["Int"]["output"]>;
  pictureHeight?: Maybe<Scalars["Int"]["output"]>;
  picturePath?: Maybe<Scalars["String"]["output"]>;
  pictureWidth?: Maybe<Scalars["Int"]["output"]>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  quotes?: Maybe<Scalars["Int"]["output"]>;
  replies?: Maybe<Array<Maybe<Tweet>>>;
  retweets?: Maybe<Scalars["Int"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  timeStamp?: Maybe<Scalars["Time"]["output"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["String"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type User = {
  __typename: "User";
  followers?: Maybe<Array<Maybe<User>>>;
  isPrivate?: Maybe<Scalars["Boolean"]["output"]>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type StatusPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type StatusPageQueryQuery = { __typename: "Query" } & {
  " $fragmentRefs"?: { TweetThreadFragment: TweetThreadFragment };
};

export type RootPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type RootPageQueryQuery = { __typename: "Query" } & {
  " $fragmentRefs"?: { TweetThreadFragment: TweetThreadFragment };
};

export type ProfilePictureFragment = {
  __typename: "User";
  profilePicture?: string | null;
} & { " $fragmentName"?: "ProfilePictureFragment" };

export type ReactionsFragment = {
  __typename: "Tweet";
  numReplies?: number | null;
  numRetweets?: number | null;
  numQuotes?: number | null;
  numLikes?: number | null;
  numBookmarks?: number | null;
} & { " $fragmentName"?: "ReactionsFragment" };

export type TweetThreadFragment = {
  __typename: "Query";
  tweet?:
    | ({
        __typename: "Tweet";
        replies?: Array<
          | ({ __typename: "Tweet" } & {
              " $fragmentRefs"?: { TweetViewFragment: TweetViewFragment };
            })
          | null
        > | null;
      } & {
        " $fragmentRefs"?: { ThreadRootViewFragment: ThreadRootViewFragment };
      })
    | null;
  me?:
    | ({ __typename: "User" } & {
        " $fragmentRefs"?: { ReplyFormFragment: ReplyFormFragment };
      })
    | null;
} & { " $fragmentName"?: "TweetThreadFragment" };

export type ReplyFormFragment = ({
  __typename: "User";
  userName?: string | null;
} & {
  " $fragmentRefs"?: { ProfilePictureFragment: ProfilePictureFragment };
}) & { " $fragmentName"?: "ReplyFormFragment" };

export type BodyFragment = { __typename: "Tweet"; body?: string | null } & {
  " $fragmentName"?: "BodyFragment";
};

export type PictureFragment = {
  __typename: "Tweet";
  picturePath?: string | null;
  pictureWidth?: number | null;
  pictureHeight?: number | null;
} & { " $fragmentName"?: "PictureFragment" };

export type ThreadRootBottomFragment = {
  __typename: "Tweet";
  time?: string | null;
  date?: string | null;
  impressions?: number | null;
} & { " $fragmentName"?: "ThreadRootBottomFragment" };

export type ThreadRootHeaderFragment = {
  __typename: "Tweet";
  userName?: string | null;
  userId?: string | null;
  profilePicture?: string | null;
} & { " $fragmentName"?: "ThreadRootHeaderFragment" };

export type ThreadRootViewFragment = ({ __typename: "Tweet" } & {
  " $fragmentRefs"?: {
    ThreadRootHeaderFragment: ThreadRootHeaderFragment;
    ThreadRootBottomFragment: ThreadRootBottomFragment;
    ReactionsFragment: ReactionsFragment;
    PictureFragment: PictureFragment;
    BodyFragment: BodyFragment;
  };
}) & { " $fragmentName"?: "ThreadRootViewFragment" };

export type ReplyContentBodyFragment = {
  __typename: "Tweet";
  body?: string | null;
} & { " $fragmentName"?: "ReplyContentBodyFragment" };

export type TweetHeaderFragment = {
  __typename: "Tweet";
  date?: string | null;
  user?: {
    __typename: "User";
    userName?: string | null;
    userId?: string | null;
  } | null;
} & { " $fragmentName"?: "TweetHeaderFragment" };

export type TweetViewFragment = ({
  __typename: "Tweet";
  user?:
    | ({ __typename: "User" } & {
        " $fragmentRefs"?: { ProfilePictureFragment: ProfilePictureFragment };
      })
    | null;
} & {
  " $fragmentRefs"?: {
    TweetHeaderFragment: TweetHeaderFragment;
    ReplyContentBodyFragment: ReplyContentBodyFragment;
    ReactionsFragment: ReactionsFragment;
  };
}) & { " $fragmentName"?: "TweetViewFragment" };

export type TimelineHeaderFragmentFragment = {
  __typename: "Tweet";
  userName?: string | null;
  userId?: string | null;
  date?: string | null;
} & { " $fragmentName"?: "TimelineHeaderFragmentFragment" };

export type PostTwMutationVariables = Exact<{
  body: Scalars["String"]["input"];
}>;

export type PostTwMutation = {
  __typename: "Mutation";
  postTweet?:
    | ({ __typename: "Tweet"; id: string } & {
        " $fragmentRefs"?: {
          TimelineTweetFragmentFragment: TimelineTweetFragmentFragment;
        };
      })
    | null;
};

export type TimelineProfilePicFragmentFragment = {
  __typename: "Tweet";
  profilePicture?: string | null;
} & { " $fragmentName"?: "TimelineProfilePicFragmentFragment" };

export type TimelineTweetActionsFragmentFragment = {
  __typename: "Tweet";
  id: string;
  retweets?: number | null;
  numLikes?: number | null;
  bookmarks?: number | null;
  impressions?: number | null;
  replies?: Array<{ __typename: "Tweet" } | null> | null;
} & { " $fragmentName"?: "TimelineTweetActionsFragmentFragment" };

export type LikeTwMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type LikeTwMutation = {
  __typename: "Mutation";
  like?: { __typename: "Tweet"; id: string; numLikes?: number | null } | null;
};

export type TimeLinePageQueryQueryVariables = Exact<{
  currentTime: Scalars["Time"]["input"];
}>;

export type TimeLinePageQueryQuery = {
  __typename: "Query";
  timeline?: Array<
    { __typename: "Tweet"; id: string } & {
      " $fragmentRefs"?: {
        TimelineTweetFragmentFragment: TimelineTweetFragmentFragment;
      };
    }
  > | null;
};

export type TimelineTweetFragmentFragment = ({
  __typename: "Tweet";
  body?: string | null;
  picturePath?: string | null;
  pictureWidth?: number | null;
  pictureHeight?: number | null;
  time?: string | null;
  date?: string | null;
  timeStamp?: TimeString | null;
  retweets?: number | null;
  quotes?: number | null;
  numLikes?: number | null;
  bookmarks?: number | null;
} & {
  " $fragmentRefs"?: {
    TimelineProfilePicFragmentFragment: TimelineProfilePicFragmentFragment;
    TimelineHeaderFragmentFragment: TimelineHeaderFragmentFragment;
    TimelineTweetActionsFragmentFragment: TimelineTweetActionsFragmentFragment;
  };
}) & { " $fragmentName"?: "TimelineTweetFragmentFragment" };

export const ThreadRootHeaderFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ThreadRootHeaderFragment, unknown>;
export const ThreadRootBottomFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootBottom" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ThreadRootBottomFragment, unknown>;
export const ReactionsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReactionsFragment, unknown>;
export const PictureFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Picture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PictureFragment, unknown>;
export const BodyFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Body" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
  ],
} as unknown as DocumentNode<BodyFragment, unknown>;
export const ThreadRootViewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootBottom" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootBottom" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Picture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Body" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
  ],
} as unknown as DocumentNode<ThreadRootViewFragment, unknown>;
export const TweetHeaderFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetHeaderFragment, unknown>;
export const ReplyContentBodyFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyContentBody" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
  ],
} as unknown as DocumentNode<ReplyContentBodyFragment, unknown>;
export const ProfilePictureFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfilePictureFragment, unknown>;
export const TweetViewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ReplyContentBody" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfilePicture" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyContentBody" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetViewFragment, unknown>;
export const ReplyFormFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ProfilePicture" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReplyFormFragment, unknown>;
export const TweetThreadFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThread" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tweet" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ThreadRootView" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "replies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TweetView" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ReplyForm" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootBottom" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Picture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Body" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyContentBody" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootBottom" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ReplyContentBody" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfilePicture" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ProfilePicture" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetThreadFragment, unknown>;
export const TimelineProfilePicFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineProfilePicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TimelineProfilePicFragmentFragment, unknown>;
export const TimelineHeaderFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineHeaderFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TimelineHeaderFragmentFragment, unknown>;
export const TimelineTweetActionsFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetActionsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TimelineTweetActionsFragmentFragment, unknown>;
export const TimelineTweetFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineProfilePicFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineTweetActionsFragment" },
          },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "timeStamp" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineProfilePicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineHeaderFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetActionsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TimelineTweetFragmentFragment, unknown>;
export const StatusPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "StatusPageQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThread" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootBottom" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Picture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Body" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootBottom" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyContentBody" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ReplyContentBody" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfilePicture" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ProfilePicture" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThread" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tweet" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ThreadRootView" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "replies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TweetView" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ReplyForm" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  StatusPageQueryQuery,
  StatusPageQueryQueryVariables
>;
export const RootPageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "RootPageQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThread" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootBottom" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Reactions" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "numReplies" } },
          { kind: "Field", name: { kind: "Name", value: "numRetweets" } },
          { kind: "Field", name: { kind: "Name", value: "numQuotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "numBookmarks" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Picture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Body" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ThreadRootView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ThreadRootBottom" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetHeader" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userName" } },
                { kind: "Field", name: { kind: "Name", value: "userId" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyContentBody" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [{ kind: "Field", name: { kind: "Name", value: "body" } }],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProfilePicture" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetHeader" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ReplyContentBody" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProfilePicture" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ReplyForm" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "ProfilePicture" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThread" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Query" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tweet" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ThreadRootView" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "replies" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TweetView" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ReplyForm" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RootPageQueryQuery, RootPageQueryQueryVariables>;
export const PostTwDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "postTw" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "body" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "postTweet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "body" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "body" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TimelineTweetFragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineProfilePicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineHeaderFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetActionsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineProfilePicFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineTweetActionsFragment" },
          },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "timeStamp" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostTwMutation, PostTwMutationVariables>;
export const LikeTwDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "likeTw" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "like" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "tweetId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "numLikes" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LikeTwMutation, LikeTwMutationVariables>;
export const TimeLinePageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TimeLinePageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "currentTime" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Time" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "timeline" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "currentTime" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "currentTime" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TimelineTweetFragment" },
                },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineProfilePicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineHeaderFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetActionsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "impressions" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TimelineTweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineProfilePicFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TimelineTweetActionsFragment" },
          },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "picturePath" } },
          { kind: "Field", name: { kind: "Name", value: "pictureWidth" } },
          { kind: "Field", name: { kind: "Name", value: "pictureHeight" } },
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "timeStamp" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  TimeLinePageQueryQuery,
  TimeLinePageQueryQueryVariables
>;
