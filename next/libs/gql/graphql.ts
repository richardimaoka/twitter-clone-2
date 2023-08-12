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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Query = {
  __typename: "Query";
  tweet?: Maybe<Tweet>;
};

export type Tweet = {
  __typename: "Tweet";
  body?: Maybe<Scalars["String"]["output"]>;
  bookmarks?: Maybe<Scalars["Int"]["output"]>;
  date?: Maybe<Scalars["String"]["output"]>;
  likes?: Maybe<Scalars["Int"]["output"]>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  quotes?: Maybe<Scalars["Int"]["output"]>;
  replies?: Maybe<Array<Maybe<Tweet>>>;
  retweets?: Maybe<Scalars["Int"]["output"]>;
  time?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  userName?: Maybe<Scalars["String"]["output"]>;
};

export type TweetColumnFragmentFragment = ({ __typename: "Tweet" } & {
  " $fragmentRefs"?: { TweetFragmentFragment: TweetFragmentFragment };
}) & { " $fragmentName"?: "TweetColumnFragmentFragment" };

export type TweetFragmentFragment = {
  __typename: "Tweet";
  userName?: string | null;
  userId?: string | null;
  profilePicture?: string | null;
  body?: string | null;
  time?: string | null;
  date?: string | null;
  retweets?: number | null;
  quotes?: number | null;
  likes?: number | null;
  bookmarks?: number | null;
} & { " $fragmentName"?: "TweetFragmentFragment" };

export type PageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type PageQueryQuery = {
  __typename: "Query";
  tweet?:
    | ({ __typename: "Tweet" } & {
        " $fragmentRefs"?: {
          TweetColumnFragmentFragment: TweetColumnFragmentFragment;
        };
      })
    | null;
};

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
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "likes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetFragmentFragment, unknown>;
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
            name: { kind: "Name", value: "TweetFragment" },
          },
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
          { kind: "Field", name: { kind: "Name", value: "userName" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "profilePicture" } },
          { kind: "Field", name: { kind: "Name", value: "body" } },
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "likes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TweetColumnFragmentFragment, unknown>;
export const PageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "PageQuery" },
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
      name: { kind: "Name", value: "TweetFragment" },
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
          { kind: "Field", name: { kind: "Name", value: "time" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "retweets" } },
          { kind: "Field", name: { kind: "Name", value: "quotes" } },
          { kind: "Field", name: { kind: "Name", value: "likes" } },
          { kind: "Field", name: { kind: "Name", value: "bookmarks" } },
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
            name: { kind: "Name", value: "TweetFragment" },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageQueryQuery, PageQueryQueryVariables>;