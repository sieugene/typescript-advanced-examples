export type Starship = {
  name: string;
};
export type Starships = Starship[];

export const types = {
  // Sync
  START_FETCHING: "START_FETCHING",
  STOP_FETCHING: "STOP_FETCHING",
  FILL_STARSHIPS: "FILL_STARSHIPS",
  // Async
  FETCH_STARSHIPS_ASYNC: "FETCH_STARSHIPS_ASYNC",
} as const;

export type FeedStartFetchingAction = {
  type: typeof types.START_FETCHING;
};
export type FeedStopFetchingAction = {
  type: typeof types.STOP_FETCHING;
};
export type FeedFillStarshipsAction = {
  type: typeof types.FILL_STARSHIPS;
  payload: Starships;
};
export type FeedStarshipsAsyncFetchingAction = {
  type: typeof types.FETCH_STARSHIPS_ASYNC;
};

export type FeedStarshipsTypes =
  | FeedStartFetchingAction
  | FeedStopFetchingAction
  | FeedFillStarshipsAction
  | FeedStarshipsAsyncFetchingAction;
