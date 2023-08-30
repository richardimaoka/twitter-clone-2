import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from "@apollo/client/cache";
export type MutationKeySpecifier = (
  | "like"
  | "postTweet"
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  like?: FieldPolicy<any> | FieldReadFunction<any>;
  postTweet?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ("timeline" | "tweet" | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  timeline?: FieldPolicy<any> | FieldReadFunction<any>;
  tweet?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type TweetKeySpecifier = (
  | "body"
  | "bookmarks"
  | "date"
  | "impressions"
  | "numLikes"
  | "pictureHeight"
  | "picturePath"
  | "pictureWidth"
  | "profilePicture"
  | "quotes"
  | "replies"
  | "retweets"
  | "time"
  | "timeStamp"
  | "tweetId"
  | "userId"
  | "userName"
  | TweetKeySpecifier
)[];
export type TweetFieldPolicy = {
  body?: FieldPolicy<any> | FieldReadFunction<any>;
  bookmarks?: FieldPolicy<any> | FieldReadFunction<any>;
  date?: FieldPolicy<any> | FieldReadFunction<any>;
  impressions?: FieldPolicy<any> | FieldReadFunction<any>;
  numLikes?: FieldPolicy<any> | FieldReadFunction<any>;
  pictureHeight?: FieldPolicy<any> | FieldReadFunction<any>;
  picturePath?: FieldPolicy<any> | FieldReadFunction<any>;
  pictureWidth?: FieldPolicy<any> | FieldReadFunction<any>;
  profilePicture?: FieldPolicy<any> | FieldReadFunction<any>;
  quotes?: FieldPolicy<any> | FieldReadFunction<any>;
  replies?: FieldPolicy<any> | FieldReadFunction<any>;
  retweets?: FieldPolicy<any> | FieldReadFunction<any>;
  time?: FieldPolicy<any> | FieldReadFunction<any>;
  timeStamp?: FieldPolicy<any> | FieldReadFunction<any>;
  tweetId?: FieldPolicy<any> | FieldReadFunction<any>;
  userId?: FieldPolicy<any> | FieldReadFunction<any>;
  userName?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  Tweet?: Omit<TypePolicy, "fields" | "keyFields"> & {
    keyFields?:
      | false
      | TweetKeySpecifier
      | (() => undefined | TweetKeySpecifier);
    fields?: TweetFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
