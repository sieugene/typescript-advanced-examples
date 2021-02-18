import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAsync } from "../action";
import { AppState } from "../../../init/rootReducer";
import { StarshipState } from "../reducer";

export const useStarshipsFetch = (): StarshipState => {
  const { isFetching, data, error } = useSelector<AppState, StarshipState>(
    (state) => state.starships
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsync());
  }, [dispatch]);

  return { isFetching, data, error };
};
