import { Phone } from "../../types/types";
import {
  CALCULATE_CART_PRICE_SUCCESS,
  CLEAR_CART_SUCCESS,
  FETCH_CART_SUCCESS,
  LOADING_CART,
  STOP_LOADING_CART,
  CartActionTypes,
} from "../action-types/cart-action-types";

type InitialStateType = {
  phones: Array<Phone>;
  loading: boolean;
  totalPrice: number;
};

const initialState: InitialStateType = {
  phones: [],
  loading: false,
  totalPrice: 0,
};

const reducer = (
  state: InitialStateType = initialState,
  action: CartActionTypes
): InitialStateType => {
  switch (action.type) {
    case LOADING_CART:
      return { ...state, loading: true };

    case FETCH_CART_SUCCESS:
      return { ...state, phones: action.payload, loading: false };

    case CALCULATE_CART_PRICE_SUCCESS:
      return { ...state, totalPrice: action.payload, loading: false };

    case STOP_LOADING_CART:
      return { ...state, loading: false, phones: [] };

    case CLEAR_CART_SUCCESS:
      return { ...state, phones: [] };

    default:
      return state;
  }
};

export default reducer;
