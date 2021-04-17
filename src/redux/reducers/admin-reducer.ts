import {
  PHONE_ADDED_SUCCESS,
  PHONE_UPDATED_SUCCESS,
  PHONE_ADDED_FAILURE,
  PHONE_UPDATED_FAILURE,
  FETCH_USER_INFO_SUCCESS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_ORDERS_SUCCESS,
  FETCH_USER_ORDERS_SUCCESS,
} from "../action-types/admin-action-types";
import { Order, PhoneErrors, User } from "../../types/types";
import { AdminActionTypes } from "../action-types/admin-action-types";

type InitialStateType = {
  orders: Array<Order>;
  userOrders: Array<Order>;
  users: Array<User>;
  user: Partial<User>;
  errors: Partial<PhoneErrors>;
  isPhoneAdded: boolean;
  isPhoneEdited: boolean;
};

const initialState: InitialStateType = {
  orders: [],
  userOrders: [],
  users: [],
  user: {},
  errors: {},
  isPhoneAdded: false,
  isPhoneEdited: false,
};

const reducer = (
  state: InitialStateType = initialState,
  action: AdminActionTypes
): InitialStateType => {
  switch (action.type) {
    case PHONE_ADDED_SUCCESS:
      return { ...state, isPhoneAdded: true, errors: {} };

    case PHONE_ADDED_FAILURE:
      return { ...state, isPhoneAdded: false, errors: action.payload };

    case PHONE_UPDATED_SUCCESS:
      return { ...state, isPhoneEdited: true, errors: {} };

    case PHONE_UPDATED_FAILURE:
      return { ...state, isPhoneEdited: false, errors: action.payload };

    case FETCH_USER_INFO_SUCCESS:
      return { ...state, user: action.payload };

    case FETCH_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case FETCH_ALL_USERS_ORDERS_SUCCESS:
      return { ...state, orders: action.payload };

    case FETCH_USER_ORDERS_SUCCESS:
      return { ...state, userOrders: action.payload };

    default:
      return state;
  }
};

export default reducer;
