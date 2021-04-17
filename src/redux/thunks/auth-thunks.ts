import axios from "axios";

import { API_BASE_URL } from "../../utils/constants/url";

import {
  loginFailure,
  loginSuccess,
  logoutSuccess,
  registerFailure,
  registerSuccess,
  showLoader,
} from "../actions/auth-actions";

import { UserData, UserRegistration } from "../../types/types";

import { Dispatch } from "redux";

export const login = (userData: UserData, history: any) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.post(API_BASE_URL + "/auth/login", userData);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userRole", response.data.userRole);
    localStorage.setItem("isLoggedIn", "true");

    dispatch(loginSuccess(response.data.userRole));
    history.push("/account");
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export const registration = (userRegistrationData: UserRegistration) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(showLoader());
    const response = await axios.post(
      API_BASE_URL + "/registration",
      userRegistrationData
    );
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.response.data));
  }
};

export const logout = () => async (dispatch: Dispatch) => {
  localStorage.removeItem("email");
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  localStorage.removeItem("isLoggedIn");
  dispatch(logoutSuccess());
};
