export const types = {
  // Sync
  FILL_PROFILE: "FILL_PROFILE",
  START_FETCHING: "START_FETCHING",
  STOP_FETCHING: "STOP_FETCHING",
} as const;

export type ProfileType = {
  firstName: string;
  lastName: string;
};

export type FillProfileAction = {
  type: typeof types.FILL_PROFILE;
  payload: ProfileType;
};

export type StartFetchingProfileAction = {
  type: typeof types.START_FETCHING;
};

export type StopFetchingProfileAction = {
  type: typeof types.STOP_FETCHING;
};

export type ProfileActionsTypes =
  | FillProfileAction
  | StartFetchingProfileAction
  | StopFetchingProfileAction;
