export type Starship = {
  name: string;
};
export type Starships = {
  results: Starship[];
};

export type ErrorHttpAction = {
  status: number;
};

// Sync
export const STARSHIPS_START_FETCHING = "STARSHIPS_START_FETCHING";
type StarshipsStartFetchingAction = {
  type: typeof STARSHIPS_START_FETCHING;
};

export const STARSHIPS_STOP_FETCHING = "STARSHIPS_STOP_FETCHING";
type StarshipsStopFetchingAction = {
  type: typeof STARSHIPS_STOP_FETCHING;
};

export const STARSHIPS_FILL = "STARSHIPS_FILL";
type StarshipsFillAction = {
  type: typeof STARSHIPS_FILL;
  payload: Starships;
};
