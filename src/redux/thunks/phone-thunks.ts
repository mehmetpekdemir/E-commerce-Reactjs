import { API_BASE_URL } from "../../utils/constants/url";
import { Dispatch } from "redux";
import axios from "axios";

import { getPhones, fetchPhoneSuccess } from "../actions/phone-actions";

export const fetchPhones = () => async (dispatch: Dispatch) => {
  const response = await axios.get(API_BASE_URL + "/phones");
  dispatch(getPhones(response.data));
};

export const fetchPhone = (id: string) => async (dispatch: Dispatch) => {
  const response = await axios.get(API_BASE_URL + "/phones/" + id);
  dispatch(fetchPhoneSuccess(response.data));
};
