import { AuthErrors } from "../../types/types";

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const SHOW_LOADER = "SHOW_LOADER";

export type LoginSuccessActionType = {
  type: typeof LOGIN_SUCCESS;
  payload: string;
};

export type LoginFailureActionType = {
  type: typeof LOGIN_FAILURE;
  payload: string;
};

export type ShowLoaderActionType = { type: typeof SHOW_LOADER };

export type RegisterSuccessActionType = {
  type: typeof REGISTER_SUCCESS;
  payload: string;
};

export type RegisterFailureActionType = {
  type: typeof REGISTER_FAILURE;
  payload: AuthErrors;
};

export type LogoutSuccessActionType = { type: typeof LOGOUT_SUCCESS };

export type AuthActionTypes =
  | LoginSuccessActionType
  | LoginFailureActionType
  | ShowLoaderActionType
  | RegisterSuccessActionType
  | RegisterFailureActionType
  | LogoutSuccessActionType;
