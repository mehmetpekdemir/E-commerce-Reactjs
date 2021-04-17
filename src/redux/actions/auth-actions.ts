import { AuthErrors } from "../../types/types";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SHOW_LOADER,
  LoginFailureActionType,
  LoginSuccessActionType,
  LogoutSuccessActionType,
  RegisterFailureActionType,
  RegisterSuccessActionType,
  ShowLoaderActionType,
} from "../action-types/auth-action-types";

export const loginSuccess = (userRole: string): LoginSuccessActionType => ({
  type: LOGIN_SUCCESS,
  payload: userRole,
});

export const loginFailure = (error: string): LoginFailureActionType => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const showLoader = (): ShowLoaderActionType => ({
  type: SHOW_LOADER,
});

export const registerSuccess = (
  message: string
): RegisterSuccessActionType => ({
  type: REGISTER_SUCCESS,
  payload: message,
});

export const registerFailure = (
  errors: AuthErrors
): RegisterFailureActionType => ({
  type: REGISTER_FAILURE,
  payload: errors,
});

export const logoutSuccess = (): LogoutSuccessActionType => ({
  type: LOGOUT_SUCCESS,
});
