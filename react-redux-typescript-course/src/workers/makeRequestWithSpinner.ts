// Core
import { SagaIterator } from "@redux-saga/core";
import { ActionCreator, AnyAction } from "redux";
import { call, put } from "redux-saga/effects";
// Types
import { FillActionType, ErrorActionType } from "../types";

type OptionsType<T> = {
  fetcher: (uri?: string) => Promise<T>;
  fetcherParam?: string;
  startFetching: ActionCreator<AnyAction>;
  stopFetching: ActionCreator<AnyAction>;
  fill: FillActionType<T>;
  setFetchingError: ErrorActionType;
};

export function* makeRequestWithSpinner<T>(
  options: OptionsType<T>
): SagaIterator {
  const {
    fetcher,
    fetcherParam,
    startFetching,
    stopFetching,
    fill,
    setFetchingError,
  } = options;
  try {
    yield put(startFetching());
    const result = yield call(fetcher, fetcherParam);
    yield put(fill(result));
  } catch (error) {
    yield put(setFetchingError(error.message || ""));
  } finally {
    yield put(stopFetching());
  }
}
