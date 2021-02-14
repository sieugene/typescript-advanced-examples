// Core
import { SagaIterator } from "@redux-saga/core";
import { all } from "redux-saga/effects";

// Watchers
import { watchStarships } from "../bus/starships/saga";

export function* rootSaga(): SagaIterator {
  yield all([watchStarships()]);
}
