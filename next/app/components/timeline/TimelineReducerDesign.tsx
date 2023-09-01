import { TimeLinePageQueryQuery, Tweet } from "@/libs/gql/graphql";

interface LoadNewerTweets {
  actionType: "LOAD_NEWER_TWEETS";
}

interface LoadOlderTweets {
  actionType: "LOAD_OLDER_TWEETS";
}

type Action = LoadNewerTweets | LoadOlderTweets;

interface State {
  readonly queryResult: TimeLinePageQueryQuery;
  readonly cache: Record<string, Tweet>;
}

export function emptyState(): State {
  return { queryResult: { __typename: "Query", timeline: [] }, cache: {} };
}

function loadNewerTweets(
  cache: Record<string, Tweet>,
  incoming: TimeLinePageQueryQuery
): State {
  // merge cache with incoming
  incoming.timeline?.forEach((tweet) => {
    if (tweet.id) {
      cache[tweet.id] = tweet;
    }
  });

  // sort tweets from cache
  const timeline: Tweet[] = Object.values(cache);
  timeline.sort((a, b) => {
    const aTime = a.timeStamp ? new Date(a.timeStamp).getTime() : 0;
    const bTime = b.timeStamp ? new Date(b.timeStamp).getTime() : 0;
    return aTime - bTime;
  });

  // pick only first 1000 tweets
  const remains = timeline.slice(0, 1000 - 1);

  // purge cache
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

function reducer(state: State, action: Action) {
  switch (action.actionType) {
    case "LOAD_NEWER_TWEETS":
      return state;
    case "LOAD_OLDER_TWEETS":
      return state;
    default:
      // exhaustivness checking - https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
  }
}
