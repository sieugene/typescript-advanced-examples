// Tools
import {
  startFetching,
  stopFetching,
  setFetchingError,
  fill,
} from "../../action";

// Types
import { Starships } from "../../types";

// Workers
import { makeRequestWithSpinner } from "../../../../workers";

// API
import { api } from "../../../../api";

export function* fetchStarships(): Generator {
  // данные для универсального воркера
  const options = {
    fetcher: api.starships.fetch,
    startFetching,
    stopFetching,
    fill,
    setFetchingError,
  };

  yield makeRequestWithSpinner<Starships>(options);
}
