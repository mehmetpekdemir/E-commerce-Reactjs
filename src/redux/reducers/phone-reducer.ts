import { Phone, Review } from "../../types/types";
import {
  FETCH_PHONES,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_BY_QUERY_SUCCESS,
  FETCH_PHONE_BY_QUERY_SUCCESS,
  FETCH_PHONES_BY_FILTER_PARAMS_SUCCESS,
  PhoneActionTypes,
} from "../action-types/phone-action-types";

type InitialStateType = {
  phones: Array<Phone>;
  phone: Partial<Phone>;
  reviews: Array<Review>;
};

const initialState: InitialStateType = {
  phones: [],
  phone: {},
  reviews: [],
};

const reducer = (
  state: InitialStateType = initialState,
  action: PhoneActionTypes
): InitialStateType => {
  switch (action.type) {
    case FETCH_PHONES:
      return { ...state, phones: action.payload };

    case FETCH_PHONES_BY_QUERY_SUCCESS:
      return { ...state, phones: action.payload };

    case FETCH_PHONE_SUCCESS:
      return {
        ...state,
        phone: action.payload,
        reviews: action.payload.reviews,
      };

    case FETCH_PHONE_BY_QUERY_SUCCESS:
      return {
        ...state,
        phone: action.payload,
        reviews: action.payload.reviews,
      };
    case FETCH_PHONES_BY_FILTER_PARAMS_SUCCESS:
      return { ...state, phones: action.payload };

    default:
      return state;
  }
};

export default reducer;
