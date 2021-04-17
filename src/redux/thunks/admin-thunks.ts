import axios from "axios";

import { API_BASE_URL } from "../../utils/constants/url";
import {
  addPhoneFailure,
  addPhoneSuccess,
  getAllUsers,
  getAllUsersOrders,
  getUserInfo,
  getUserOrders,
  updatePhoneFailure,
  updatePhoneSuccess,
} from "../actions/admin-actions";
import { Dispatch } from "redux";
import { fetchPhoneSuccess } from "../actions/phone-actions";

export const addPhone = (data: FormData) => async (dispatch: Dispatch) => {
  try {
    await axios({
      method: "POST",
      url: API_BASE_URL + "/admin/add",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    });
    dispatch(addPhoneSuccess());
  } catch (error) {
    dispatch(addPhoneFailure(error.response.data));
  }
};

export const updatePhone = (data: FormData) => async (dispatch: Dispatch) => {
  try {
    const response = await axios({
      method: "PUT",
      url: API_BASE_URL + "/admin/edit",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    });
    dispatch(updatePhoneSuccess());
    dispatch(fetchPhoneSuccess(response.data));
  } catch (error) {
    dispatch(updatePhoneFailure(error.response.data));
  }
};

export const fetchAllUsersOrders = () => async (dispatch: Dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/orders",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch(getAllUsersOrders(response.data));
};

export const fetchUserOrders = (email: string | undefined) => async (
  dispatch: Dispatch
) => {
  const response = await axios({
    method: "POST",
    url: API_BASE_URL + "/admin/order",
    data: { email: email },
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch(getUserOrders(response.data));
};

export const fetchAllUsers = () => async (dispatch: Dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/user/all",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch(getAllUsers(response.data));
};

export const fetchUserInfo = (id: string) => async (dispatch: Dispatch) => {
  const response = await axios({
    method: "GET",
    url: API_BASE_URL + "/admin/user/" + id,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  });
  dispatch(getUserInfo(response.data));
};
