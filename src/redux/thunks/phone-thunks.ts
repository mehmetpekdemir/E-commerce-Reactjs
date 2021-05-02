import { API_BASE_URL } from "../../utils/constants/url";
import { Dispatch } from "redux";
import axios from "axios";
import { FilterParamsType } from "../../types/types";

import {
  getPhones,
  fetchPhoneSuccess,
  fetchPhonesByFilterParamsSuccess,
} from "../actions/phone-actions";

export const fetchPhones = () => async (dispatch: Dispatch) => {
  const response = await axios.get(API_BASE_URL + "/phones");
  dispatch(getPhones(response.data));
};

export const fetchPhone = (id: string) => async (dispatch: Dispatch) => {
  const response = await axios.get(API_BASE_URL + "/phones/" + id);
  dispatch(fetchPhoneSuccess(response.data));
};

export const fetchPhonesByFilterParams = (filter: FilterParamsType) => async (
  dispatch: Dispatch
) => {
  const response = await axios.post(API_BASE_URL + "/phones/search", filter);
  dispatch(fetchPhonesByFilterParamsSuccess(response.data));
};
