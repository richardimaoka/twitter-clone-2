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
  timeline?: Maybe<Array<Tweet>>;
  tweet?: Maybe<Tweet>;
};

export type QueryTimelineArgs = {
  currentTime: Scalars["Time"]["input"];
};

export type Tweet = {
  __typename: "Tweet";
  body?: Maybe<Scalars["String"]["output"]>;
  bookmarks?: Maybe<Scalars["Int"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  impressions?: Maybe<Scalars["Int"]["output"]>;
  numLikes?: Maybe<Scalars["Int"]["output"]>;
  pictureHeight?: Maybe<Scalars["Int"]["output"]>;
  picturePath?: Maybe<Scalars["String"]["output"]>;
  pictureWidth?: Maybe<Scalars["Int"]["output"]>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  quotes?: Maybe<Scalars["Int"]["output"]>;
  replies?: Maybe<Array<Maybe<Tweet>>>;
  retweets?: Maybe<Scalars["Int"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  timeStamp?: Maybe<Scalars["Time"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type RootPageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type RootPageQueryQuery = {
  __typename: "Query";
  tweet?:
    | ({ __typename: "Tweet" } & {
        " $fragmentRefs"?: {
          TweetColumnFragmentFragment: TweetColumnFragmentFragment;
        };
      })
    | null;
};

export type PictureFragment = {
  __typename: "Tweet";
  picturePath?: string | null;
  pictureWidth?: number | null;
  pictureHeight?: number | null;
} & { " $fragmentName"?: "PictureFragment" };

export type ReactionsFragment = {
  __typename: "Tweet";
  retweets?: number | null;
  quotes?: number | null;
  numLikes?: number | null;
  bookmarks?: number | null;
} & { " $fragmentName"?: "ReactionsFragment" };

export type TweetColumnFragmentFragment = ({ __typename: "Tweet" } & {
  " $fragmentRefs"?: {
    TweetThreadFragmentFragment: TweetThreadFragmentFragment;
  };
}) & { " $fragmentName"?: "TweetColumnFragmentFragment" };

export type TweetReplyFragmentFragment = {
  __typename: "Tweet";
  userName?: string | null;
  userId?: string | null;
  profilePicture?: string | null;
  body?: string | null;
  date?: string | null;
  retweets?: number | null;
  quotes?: number | null;
  numLikes?: number | null;
} & { " $fragmentName"?: "TweetReplyFragmentFragment" };

export type TweetStatsFragmentFragment = {
  __typename: "Tweet";
  retweets?: number | null;
  quotes?: number | null;
  numLikes?: number | null;
  bookmarks?: number | null;
} & { " $fragmentName"?: "TweetStatsFragmentFragment" };

export type TweetThreadFragmentFragment = ({
  __typename: "Tweet";
  replies?: Array<
    | ({ __typename: "Tweet" } & {
        " $fragmentRefs"?: {
          TweetReplyFragmentFragment: TweetReplyFragmentFragment;
        };
      })
    | null
  > | null;
} & { " $fragmentRefs"?: { TweetFragmentFragment: TweetFragmentFragment } }) & {
  " $fragmentName"?: "TweetThreadFragmentFragment";
};

export type TweetThreadHeaderFragmentFragment = {
  __typename: "Tweet";
  userName?: string | null;
  userId?: string | null;
  profilePicture?: string | null;
} & { " $fragmentName"?: "TweetThreadHeaderFragmentFragment" };

export type TweetTimeImpressionFragmentFragment = {
  __typename: "Tweet";
  time?: string | null;
  date?: string | null;
  impressions?: number | null;
} & { " $fragmentName"?: "TweetTimeImpressionFragmentFragment" };

export type TweetFragmentFragment = ({
  __typename: "Tweet";
  body?: string | null;
} & {
  " $fragmentRefs"?: {
    TweetThreadHeaderFragmentFragment: TweetThreadHeaderFragmentFragment;
    TweetTimeImpressionFragmentFragment: TweetTimeImpressionFragmentFragment;
    ReactionsFragment: ReactionsFragment;
    PictureFragment: PictureFragment;
  };
}) & { " $fragmentName"?: "TweetFragmentFragment" };

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

export const TweetThreadHeaderFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadHeaderFragment" },
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
} as unknown as DocumentNode<TweetThreadHeaderFragmentFragment, unknown>;
export const TweetTimeImpressionFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetTimeImpressionFragment" },
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
} as unknown as DocumentNode<TweetTimeImpressionFragmentFragment, unknown>;
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
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
export const TweetFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetTimeImpressionFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadHeaderFragment" },
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
      name: { kind: "Name", value: "TweetTimeImpressionFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
  ],
} as unknown as DocumentNode<TweetFragmentFragment, unknown>;
export const TweetReplyFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetReplyFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetReplyFragmentFragment, unknown>;
export const TweetThreadFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetFragment" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TweetReplyFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadHeaderFragment" },
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
      name: { kind: "Name", value: "TweetTimeImpressionFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
      name: { kind: "Name", value: "TweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetTimeImpressionFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetReplyFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetThreadFragmentFragment, unknown>;
export const TweetColumnFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetColumnFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadFragment" },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadHeaderFragment" },
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
      name: { kind: "Name", value: "TweetTimeImpressionFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
      name: { kind: "Name", value: "TweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetTimeImpressionFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetReplyFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetFragment" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TweetReplyFragment" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetColumnFragmentFragment, unknown>;
export const TweetStatsFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetStatsFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetStatsFragmentFragment, unknown>;
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
            kind: "Field",
            name: { kind: "Name", value: "tweet" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TweetColumnFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadHeaderFragment" },
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
      name: { kind: "Name", value: "TweetTimeImpressionFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
      name: { kind: "Name", value: "TweetFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadHeaderFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetTimeImpressionFragment" },
          },
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "Reactions" },
          },
          { kind: "FragmentSpread", name: { kind: "Name", value: "Picture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetReplyFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "numLikes" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetThreadFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetFragment" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "replies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "TweetReplyFragment" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TweetColumnFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Tweet" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: { kind: "Name", value: "TweetThreadFragment" },
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
