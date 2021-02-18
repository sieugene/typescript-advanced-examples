import {
  StarshipActionTypes,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  Starships,
  STARSHIPS_FILL,
  STARSHIPS_SET_FETCHING_ERROR,
  ErrorHttpAction,
  StarshipsFillAction,
  StarshipsSetFetchingErrorAction,
} from "./types";

// Sync
export function startFetching(): StarshipActionTypes {
  return {
    type: STARSHIPS_START_FETCHING,
  };
}

export function stopFetching(): StarshipActionTypes {
  return {
    type: STARSHIPS_STOP_FETCHING,
  };
}

export function fill(payload: Starships): StarshipsFillAction {
  return {
    type: STARSHIPS_FILL,
    payload,
  };
}

export function setFetchingError(
  payload: ErrorHttpAction
): StarshipsSetFetchingErrorAction {
  return {
    type: STARSHIPS_SET_FETCHING_ERROR,
    payload,
    error: true,
  };
}

// Async
export function fetchAsync(): StarshipActionTypes {
  return {
    type: STARSHIPS_FETCH_ASYNC,
  };
}
