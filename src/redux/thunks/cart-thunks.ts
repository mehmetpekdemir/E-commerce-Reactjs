import axios from "axios";

import { API_BASE_URL } from "../../utils/constants/url";
import { Phone } from "../../types/types";
import {
  calculateCartPriceSuccess,
  clearCartSuccess,
  fetchCartSuccess,
  loadingCart,
  stopLoadingCart,
} from "../actions/cart-actions";
import { Dispatch } from "redux";

export const fetchCart = (data: Array<number>) => async (
  dispatch: Dispatch
) => {
  dispatch(loadingCart());
  const response = await axios.post(API_BASE_URL + "/users/cart", data);
  const phones: Map<number, number> = new Map(
    JSON.parse(<string>localStorage.getItem("phones"))
  );
  let total: number = 0;

  phones.forEach((value: number, key: number) => {
    const phone: Phone = response.data.find(
      (phone: { id: number }) => phone.id === key
    );
    total += phone.productPrice * value;
  });
  dispatch(fetchCartSuccess(response.data));
  dispatch(calculateCartPriceSuccess(total));
};

export const calculateCartPrice = (phones: Array<Phone> | any) => (
  dispatch: Dispatch
) => {
  const phonesFromLocalStorage: Map<number, number> = new Map(
    JSON.parse(<string>localStorage.getItem("phones"))
  );
  let total: number = 0;

  phonesFromLocalStorage.forEach((value: number, key: number) => {
    const phone: Phone = phones.find(
      (phone: { id: number }) => phone.id === key
    );
    total += phone.productPrice * value;
  });
  dispatch(calculateCartPriceSuccess(total));
};

export const clearCart = () => (dispatch: Dispatch) => {
  dispatch(clearCartSuccess());
};

export const loadCart = () => (dispatch: Dispatch) => {
  dispatch(stopLoadingCart());
};
