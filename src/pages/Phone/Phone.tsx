import React, { FC, FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { IMG_URL } from "../../utils/constants/url";
import { fetchPhone } from "../../redux/thunks/phone-thunks";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { ReviewError } from "../../types/types";

const Phone: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const phone = useSelector((state: AppStateType) => state.phone.phone);

  const errors: Partial<ReviewError> = useSelector(
    (state: AppStateType) => state.user.reviewErrors
  );

  useEffect(() => {
    dispatch(fetchPhone(match.params.id));
  }, []);

  const addToCart = (): void => {
    const phoneId: number | undefined = phone.id;
    let data: string | null = localStorage.getItem("phones");
    let cart: Map<number, any> = data
      ? new Map(JSON.parse(data as string))
      : new Map();

    if (cart.has(phoneId as number)) {
      cart.set(phoneId as number, cart.get(phoneId as number) + 1);
    } else {
      cart.set(phoneId as number, 1);
    }
    localStorage.setItem("phones", JSON.stringify(Array.from(cart.entries())));
    history.push("/cart");
  };

  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-md-5">
          <div>
            <img
              src={IMG_URL + phone.fileName}
              className="rounded mx-auto w-100"
              alt="empty"
            />
          </div>
        </div>
        <div className="col-md-7">
          <h2>{phone.productName}</h2>
          <h3>{phone.productDescription}</h3>
          <p>
            Product code: <span>{phone.id}</span>
          </p>
          <p style={{ color: "#54C0A1" }}>In Stock</p>
          <div className="row ml-1">
            <h6 className="mr-5">
              <span>${phone.productPrice}</span>.00
            </h6>
            <button
              type="submit"
              className="btn btn-success mx-3"
              onClick={addToCart}
            >
              <FontAwesomeIcon className="mr-2 fa-lg" icon={faCartPlus} /> ADD
              TO CART
            </button>
          </div>
          <br />
          <table className="table">
            <tbody>
              <tr>
                <td>Phone title:</td>
                <td>{phone.productName}</td>
              </tr>
              <tr>
                <td>Brand:</td>
                <td>{phone.brand}</td>
              </tr>
              <tr>
                <td>Phone description:</td>
                <td>{phone.productDescription}</td>
              </tr>
              <tr>
                <td>Phone color:</td>
                <td>{phone.color}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <span>{phone.productPrice}</span>
                </td>
              </tr>
              <tr>
                <td>Internal Memory:</td>
                <td>{phone.internalMemory}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Phone;
