import {
  ErrorHttpAction,
  Starships,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_FILL,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  StarshipActionTypes,
} from "./types";

export type StarshipState = {
  data: Starships;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

const initialState: StarshipState = {
  data: {
    results: [],
  },
  isFetching: false,
  error: false,
};

export const starshipsReducer = (
  state = initialState,
  action: StarshipActionTypes
): StarshipState => {
  switch (action.type) {
    case STARSHIPS_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case STARSHIPS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case STARSHIPS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case STARSHIPS_FILL:
      return {
        ...state,
        data: {
          ...action.payload,
        },
        error: false,
      };
    case STARSHIPS_FETCH_ASYNC:
      return state;
    default:
      // проверяем используются ли все экшены
      // eslint-disable-next-line no-case-declarations
      const x: never = action;
      return state;
  }
};
