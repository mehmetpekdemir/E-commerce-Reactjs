import { Phone } from "../../types/types";
import {
  FETCH_PHONES,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_BY_QUERY_SUCCESS,
  FETCH_PHONE_BY_QUERY_SUCCESS,
  FETCH_PHONES_BY_FILTER_PARAMS_SUCCESS,
  FetchPhonesByQuerySuccessActionType,
  FetchPhoneByQuerySuccessActionType,
  FetchPhoneSuccessActionType,
  GetPhonesActionType,
  FetchPhonesByFilterParamsSuccessActionType,
} from "../action-types/phone-action-types";

export const getPhones = (phones: Array<Phone>): GetPhonesActionType => ({
  type: FETCH_PHONES,
  payload: phones,
});

export const fetchPhonesByQuerySuccess = (
  phones: Array<Phone>
): FetchPhonesByQuerySuccessActionType => ({
  type: FETCH_PHONES_BY_QUERY_SUCCESS,
  payload: phones,
});

export const fetchPhoneByQuerySuccess = (
  phone: Phone
): FetchPhoneByQuerySuccessActionType => ({
  type: FETCH_PHONE_BY_QUERY_SUCCESS,
  payload: phone,
});

export const fetchPhoneSuccess = (
  phone: Phone
): FetchPhoneSuccessActionType => ({
  type: FETCH_PHONE_SUCCESS,
  payload: phone,
});

export const fetchPhonesByFilterParamsSuccess = (
  phones: Array<Phone>
): FetchPhonesByFilterParamsSuccessActionType => ({
  type: FETCH_PHONES_BY_FILTER_PARAMS_SUCCESS,
  payload: phones,
});
