import { AuthErrors, User } from "../../types/types";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  SHOW_LOADER,
  AuthActionTypes,
} from "../action-types/auth-action-types";

type InitialStateType = {
  user: Partial<User>;
  userEmail: string | null;
  userRole: string | null;
  isRegistered: boolean;
  loading: boolean;
  success: string;
  error: string;
  errors: Partial<AuthErrors>;
};

const initialState: InitialStateType = {
  user: {},
  userEmail: "",
  userRole: "",
  isRegistered: false,
  loading: false,
  success: "",
  error: "",
  errors: {},
};

const reducer = (
  state: InitialStateType = initialState,
  action: AuthActionTypes
): InitialStateType => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true, errors: {} };

    case LOGIN_SUCCESS:
      return { ...state, userRole: action.payload };

    case LOGIN_FAILURE:
      return { ...state, error: action.payload };

    case REGISTER_SUCCESS:
      return { ...state, isRegistered: true, loading: false, errors: {} };

    case REGISTER_FAILURE:
      return { ...state, errors: action.payload, loading: false };

    case LOGOUT_SUCCESS:
      return { ...state, userRole: "" };

    default:
      return state;
  }
};

export default reducer;
