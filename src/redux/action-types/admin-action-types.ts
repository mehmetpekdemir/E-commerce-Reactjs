import { Order, PhoneErrors, User } from "../../types/types";

export const FETCH_ALL_USERS_ORDERS_SUCCESS = "FETCH_ALL_USERS_ORDERS_SUCCESS";
export const FETCH_USER_ORDERS_SUCCESS = "FETCH_USER_ORDERS_SUCCESS";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const PHONE_ADDED_FAILURE = "PHONE_ADDED_FAILURE";
export const PHONE_ADDED_SUCCESS = "PHONE_ADDED_SUCCESS";
export const PHONE_UPDATED_FAILURE = "PHONE_UPDATED_FAILURE";
export const PHONE_UPDATED_SUCCESS = "PHONE_UPDATED_SUCCESS";

export type AddPhoneSuccessActionType = {
  type: typeof PHONE_ADDED_SUCCESS;
};

export type AddPhoneFailureActionType = {
  type: typeof PHONE_ADDED_FAILURE;
  payload: PhoneErrors;
};

export type UpdatePhoneSuccessActionType = {
  type: typeof PHONE_UPDATED_SUCCESS;
};

export type UpdatePhoneFailureActionType = {
  type: typeof PHONE_UPDATED_FAILURE;
  payload: PhoneErrors;
};

export type GetAllUsersOrdersActionType = {
  type: typeof FETCH_ALL_USERS_ORDERS_SUCCESS;
  payload: Array<Order>;
};

export type GetUserOrdersActionType = {
  type: typeof FETCH_USER_ORDERS_SUCCESS;
  payload: Array<Order>;
};

export type GetAllUsersActionType = {
  type: typeof FETCH_ALL_USERS_SUCCESS;
  payload: Array<User>;
};

export type GetUserInfoActionType = {
  type: typeof FETCH_USER_INFO_SUCCESS;
  payload: User;
};

export type AdminActionTypes =
  | AddPhoneSuccessActionType
  | AddPhoneFailureActionType
  | UpdatePhoneSuccessActionType
  | UpdatePhoneFailureActionType
  | GetAllUsersOrdersActionType
  | GetUserOrdersActionType
  | GetAllUsersActionType
  | GetUserInfoActionType;
