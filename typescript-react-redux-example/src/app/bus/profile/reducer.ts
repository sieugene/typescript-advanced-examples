// Types
import { types, ProfileActionsTypes } from "./types";

export type ProfileStateType = {
  firstName: string;
  lastName: string;
  isFetching: boolean;
};

const initialState = {
  firstName: "Уолтер",
  lastName: "Уайт",
  isFetching: false,
};

export const profileReducer = (
  state = initialState,
  action: ProfileActionsTypes
): ProfileStateType => {
  switch (action.type) {
    case types.FILL_PROFILE:
      return { ...state, ...action.payload };

    case types.START_FETCHING:
      return { ...state, isFetching: true };

    case types.STOP_FETCHING:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
