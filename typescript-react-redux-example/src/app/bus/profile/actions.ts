// Types
import {
  types,
  ProfileType,
  FillProfileAction,
  ProfileActionsTypes,
} from "./types";

export const profileActions = {
  // Sync
  fillProfile: (profile: ProfileType): FillProfileAction => {
    return {
      type: types.FILL_PROFILE,
      payload: profile,
    };
  },
  startFetching: (): ProfileActionsTypes => {
    return {
      type: types.START_FETCHING,
    };
  },
  stopFetching: (): ProfileActionsTypes => {
    return {
      type: types.STOP_FETCHING,
    };
  },
};
