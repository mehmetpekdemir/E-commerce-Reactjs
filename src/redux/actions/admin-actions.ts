import { Order, PhoneErrors, User } from "../../types/types";
import {
  AddPhoneFailureActionType,
  AddPhoneSuccessActionType,
  FETCH_ALL_USERS_ORDERS_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_ORDERS_SUCCESS,
  GetAllUsersActionType,
  GetAllUsersOrdersActionType,
  GetUserInfoActionType,
  GetUserOrdersActionType,
  PHONE_ADDED_FAILURE,
  PHONE_ADDED_SUCCESS,
  PHONE_UPDATED_FAILURE,
  PHONE_UPDATED_SUCCESS,
  UpdatePhoneFailureActionType,
  UpdatePhoneSuccessActionType,
} from "../action-types/admin-action-types";

export const addPhoneSuccess = (): AddPhoneSuccessActionType => ({
  type: PHONE_ADDED_SUCCESS,
});

export const addPhoneFailure = (
  error: PhoneErrors
): AddPhoneFailureActionType => ({
  type: PHONE_ADDED_FAILURE,
  payload: error,
});

export const updatePhoneSuccess = (): UpdatePhoneSuccessActionType => ({
  type: PHONE_UPDATED_SUCCESS,
});

export const updatePhoneFailure = (
  error: PhoneErrors
): UpdatePhoneFailureActionType => ({
  type: PHONE_UPDATED_FAILURE,
  payload: error,
});

export const getAllUsersOrders = (
  orders: Array<Order>
): GetAllUsersOrdersActionType => ({
  type: FETCH_ALL_USERS_ORDERS_SUCCESS,
  payload: orders,
});

export const getUserOrders = (
  orders: Array<Order>
): GetUserOrdersActionType => ({
  type: FETCH_USER_ORDERS_SUCCESS,
  payload: orders,
});

export const getAllUsers = (users: Array<User>): GetAllUsersActionType => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: users,
});

export const getUserInfo = (user: User): GetUserInfoActionType => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: user,
});
