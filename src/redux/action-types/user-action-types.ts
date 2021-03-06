import {
  AuthErrors,
  ReviewError,
  User,
  UserEditErrors,
} from "../../types/types";
import { LogoutSuccessActionType } from "./auth-action-types";

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const USER_UPDATED_SUCCESS = "USER_UPDATED_SUCCESS";
export const USER_UPDATED_FAILURE = "USER_UPDATED_FAILURE";
export const USER_UPDATED_PASSWORD_SUCCESS = "USER_UPDATED_PASSWORD_SUCCESS";
export const USER_UPDATED_PASSWORD_FAILURE = "USER_UPDATED_PASSWORD_FAILURE";
export const USER_ADDED_REVIEW_SUCCESS = "USER_ADDED_REVIEW_SUCCESS";
export const USER_ADDED_REVIEW_FAILURE = "USER_ADDED_REVIEW_FAILURE";
export const RESET_INPUT_FORM = "RESET_INPUT_FORM";

export type FetchUserSuccessActionType = {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
};

export type UserUpdatedSuccessActionType = {
  type: typeof USER_UPDATED_SUCCESS;
  payload: User;
};

export type UserUpdatedFailureActionType = {
  type: typeof USER_UPDATED_FAILURE;
  payload: UserEditErrors;
};

export type UserUpdatedPasswordSuccessActionType = {
  type: typeof USER_UPDATED_PASSWORD_SUCCESS;
  payload: string;
};

export type UserUpdatedPasswordFailureActionType = {
  type: typeof USER_UPDATED_PASSWORD_FAILURE;
  payload: AuthErrors;
};

export type UserAddedReviewSuccessActionType = {
  type: typeof USER_ADDED_REVIEW_SUCCESS;
};

export type UserAddedReviewFailureActionType = {
  type: typeof USER_ADDED_REVIEW_FAILURE;
  payload: ReviewError;
};

export type UserActionsTypes =
  | UserUpdatedSuccessActionType
  | FetchUserSuccessActionType
  | UserUpdatedFailureActionType
  | UserUpdatedPasswordSuccessActionType
  | UserUpdatedPasswordFailureActionType
  | UserAddedReviewSuccessActionType
  | UserAddedReviewFailureActionType
  | LogoutSuccessActionType;
