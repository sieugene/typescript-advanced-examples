// Types
import { types, Starships, FeedStarshipsTypes } from "./types";

type FeedStarshipState = {
  starships: Starships;
  isFetching: boolean;
};
const initialState: FeedStarshipState = {
  starships: [],
  isFetching: false,
};

export const feedReducer = (
  state = initialState,
  action: FeedStarshipsTypes
): FeedStarshipState => {
  switch (action.type) {
    case types.START_FETCHING:
      return { ...state, isFetching: true };

    case types.STOP_FETCHING:
      return { ...state, isFetching: false };

    case types.FILL_STARSHIPS:
      return { ...state, starships: action.payload };

    default:
      // eslint-disable-next-line
      //   const x: never = () => {};
      return state;
  }
};
