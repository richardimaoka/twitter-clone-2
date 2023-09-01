import { TimeLinePageQueryQuery, Tweet } from "@/libs/gql/graphql";

interface LoadNewerTweets {
  actionType: "LOAD_NEWER_TWEETS";
  queryResult: TimeLinePageQueryQuery;
}

interface LoadOlderTweets {
  actionType: "LOAD_OLDER_TWEETS";
  queryResult: TimeLinePageQueryQuery;
}

interface AddSingleNewTweet {
  actionType: "ADD_SINGLE_NEW_TWEET";
  tweet: Tweet;
}

export type Action = LoadNewerTweets | LoadOlderTweets | AddSingleNewTweet;

export interface State {
  readonly queryResult: TimeLinePageQueryQuery;
  readonly cache: Record<string, Tweet>;
}

export function emptyState(): State {
  return { queryResult: { __typename: "Query", timeline: [] }, cache: {} };
}

function merge(cache: Record<string, Tweet>, incoming: Tweet[]) {
  incoming.forEach((tweet) => {
    if (tweet.id) {
      cache[tweet.id] = tweet;
    }
  });
}

function sortedTimeline(cache: Record<string, Tweet>): Tweet[] {
  // sort tweets from cache
  const timeline: Tweet[] = Object.values(cache);
  timeline.sort((a, b) => {
    const aTime = a.timeStamp ? new Date(a.timeStamp).getTime() : 0;
    const bTime = b.timeStamp ? new Date(b.timeStamp).getTime() : 0;
    return bTime - aTime;
  });

  return timeline;
}

function addSingleNewTweet(
  cache: Record<string, Tweet>,
  incoming: Tweet
): State {
  return loadNewerTweets(cache, { __typename: "Query", timeline: [incoming] });
}

function loadNewerTweets(
  cache: Record<string, Tweet>,
  incoming: TimeLinePageQueryQuery
): State {
  const incomingTweets = incoming.timeline ? incoming.timeline : [];
  merge(cache, incomingTweets);
  const timeline = sortedTimeline(cache);

  // pick only first 1000 tweets - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  const remains = timeline.slice(0, 1000); //slice() extracts up to but not including end

  // purge cache for deleted tweets
  const deleted = timeline.slice(1000);
  deleted.forEach((tweet) => {
    //supposedly tweet.id exists, but its type can still be null | undefined
    if (tweet.id) {
      delete cache[tweet.id];
    }
  });

  return {
    queryResult: { __typename: "Query", timeline: remains },
    cache: cache,
  };
}

function loadOlderTweets(
  cache: Record<string, Tweet>,
  incoming: TimeLinePageQueryQuery
): State {
  const incomingTweets = incoming.timeline ? incoming.timeline : [];
  merge(cache, incomingTweets);
  const timeline = sortedTimeline(cache);

  // pick only last 1000 tweets - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  const remains = timeline.slice(-1000); // Negative index counts back from the end of the array

  // purge cache for deleted tweets
  const deleted = timeline.slice(0, -1000);
  deleted.forEach((tweet) => {
    //supposedly tweet.id exists, but its type can still be null | undefined
    if (tweet.id) {
      delete cache[tweet.id];
    }
  });

  return {
    queryResult: { __typename: "Query", timeline: remains },
    cache: cache,
  };
}

export function reducer(state: State, action: Action) {
  switch (action.actionType) {
    case "LOAD_NEWER_TWEETS":
      return loadNewerTweets(state.cache, action.queryResult);
    case "LOAD_OLDER_TWEETS":
      return loadOlderTweets(state.cache, action.queryResult);
    case "ADD_SINGLE_NEW_TWEET":
      return addSingleNewTweet(state.cache, action.tweet);
    default:
      // exhaustivness checking - https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
  }
}
