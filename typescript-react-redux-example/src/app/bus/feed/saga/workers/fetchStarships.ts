import { SagaIterator } from "redux-saga";
// Core
import { put, call, delay } from "redux-saga/effects";
// Instruments
import { feedActions } from "../../actions";
import { Starships } from "../../types";

type RequestStarships = {
  results: Starships;
};

interface TypedResponse<T> extends Response {
  json<P = T>(): Promise<P>;
}

export function* fetchStarships(): SagaIterator {
  try {
    yield put(feedActions.startFetching());

    const response: TypedResponse<RequestStarships> = yield call(
      fetch,
      "https://swapi.dev/api/starships"
    );

    const { results }: RequestStarships = yield call([response, response.json]);

    if (response.status !== 200) {
      throw new Error(`We can't receive starships 😢`);
    }

    yield delay(200);
    yield put(feedActions.fillStarships(results));
  } catch (error) {
    console.log("fetchStarshipsAsync", error);
  } finally {
    yield put(feedActions.stopFetching());
  }
}
