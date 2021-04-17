import { Phone } from "../../types/types";

export const FETCH_PHONES = "FETCH_PHONES";
export const FETCH_PHONES_BY_QUERY_SUCCESS = "FETCH_PHONES_BY_QUERY_SUCCESS";
export const FETCH_PHONE_BY_QUERY_SUCCESS = "FETCH_PHONE_BY_QUERY_SUCCESS";
export const FETCH_PHONE_SUCCESS = "FETCH_PHONE_SUCCESS";
export const FETCH_PHONES_BY_NAME_SUCCESS = "FETCH_PHONES_BY_NAME_SUCCESS";

export type GetPhonesActionType = {
  type: typeof FETCH_PHONES;
  payload: Array<Phone>;
};

export type FetchPhonesByQuerySuccessActionType = {
  type: typeof FETCH_PHONES_BY_QUERY_SUCCESS;
  payload: Array<Phone>;
};

export type FetchPhoneByQuerySuccessActionType = {
  type: typeof FETCH_PHONE_BY_QUERY_SUCCESS;
  payload: Phone;
};

export type FetchPhoneSuccessActionType = {
  type: typeof FETCH_PHONE_SUCCESS;
  payload: Phone;
};

export type PhoneActionTypes =
  | GetPhonesActionType
  | FetchPhonesByQuerySuccessActionType
  | FetchPhoneByQuerySuccessActionType
  | FetchPhoneByQuerySuccessActionType
  | FetchPhoneSuccessActionType;
