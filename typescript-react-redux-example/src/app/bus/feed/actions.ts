// Types
import {
  types,
  FeedStarshipsTypes,
  FeedFillStarshipsAction,
  Starships,
} from "./types";

export const feedActions = {
  // Sync
  startFetching: (): FeedStarshipsTypes => {
    return {
      type: types.START_FETCHING,
    };
  },
  stopFetching: (): FeedStarshipsTypes => {
    return {
      type: types.STOP_FETCHING,
    };
  },
  fillStarships: (starships: Starships): FeedFillStarshipsAction => {
    return {
      type: types.FILL_STARSHIPS,
      payload: starships,
    };
  },
  // Async
  fetchStarshipsAsync: (): FeedStarshipsTypes => {
    return {
      type: types.FETCH_STARSHIPS_ASYNC,
    };
  },
};
