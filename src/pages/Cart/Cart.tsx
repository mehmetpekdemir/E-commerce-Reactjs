import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  faChevronDown,
  faChevronUp,
  faMinusSquare,
  faShoppingBag,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IMG_URL } from "../../utils/constants/url";
import Spinner from "../../component/Spinner/Spinner";
import {
  calculateCartPrice,
  fetchCart,
  loadCart,
} from "../../redux/thunks/cart-thunks";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Phone } from "../../types/types";

const Cart: FC = () => {
  const dispatch = useDispatch();
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.cart.phones
  );
  const totalPrice: number = useSelector(
    (state: AppStateType) => state.cart.totalPrice
  );
  const loading: boolean = useSelector(
    (state: AppStateType) => state.cart.loading
  );
  const [phoneInCart, setPhoneInCart] = useState(() => new Map());

  useEffect(() => {
    const phonesFromLocalStorage: Map<number, number> = new Map(
      JSON.parse(localStorage.getItem("phones") as string)
    );

    if (phonesFromLocalStorage !== null) {
      dispatch(fetchCart(Array.from(phonesFromLocalStorage.keys())));
      phonesFromLocalStorage.forEach((value: number, key: number) => {
        setPhoneInCart(phoneInCart.set(key, value));
      });
    } else {
      dispatch(loadCart());
    }
  }, []);

  const deleteFromCart = (phoneId: number): void => {
    phoneInCart.delete(phoneId);

    if (phoneInCart.size === 0) {
      localStorage.removeItem("phones");
      setPhoneInCart(new Map());
    } else {
      localStorage.setItem(
        "phones",
        JSON.stringify(Array.from(phoneInCart.entries()))
      );
    }
    dispatch(fetchCart(Array.from(phoneInCart.keys())));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    phoneId: number
  ): void => {
    if (
      isNaN(parseInt(event.target.value)) ||
      parseInt(event.target.value) === 0 ||
      parseInt(event.target.value) > 99
    ) {
      setPhoneInCart(phoneInCart.set(phoneId, 1));
      localStorage.setItem(
        "phones",
        JSON.stringify(Array.from(phoneInCart.entries()))
      );
    } else {
      setPhoneInCart(phoneInCart.set(phoneId, parseInt(event.target.value)));
      localStorage.setItem(
        "phones",
        JSON.stringify(Array.from(phoneInCart.entries()))
      );
    }
    dispatch(calculateCartPrice(phones));
  };

  const onIncrease = (phoneId: number): void => {
    setPhoneInCart(phoneInCart.set(phoneId, phoneInCart.get(phoneId) + 1));
    localStorage.setItem(
      "phones",
      JSON.stringify(Array.from(phoneInCart.entries()))
    );
    dispatch(calculateCartPrice(phones));
  };

  const onDecrease = (phoneId: number): void => {
    setPhoneInCart(phoneInCart.set(phoneId, phoneInCart.get(phoneId) - 1));
    localStorage.setItem(
      "phones",
      JSON.stringify(Array.from(phoneInCart.entries()))
    );
    dispatch(calculateCartPrice(phones));
  };

  return (
    <div className="container mt-5 pb-5" style={{ minHeight: "350px" }}>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {phones.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h2>Cart is empty</h2>
            </div>
          ) : (
            <div>
              <p className="h4 mb-4 text-center">
                <FontAwesomeIcon className="mr-2" icon={faShoppingCart} /> Cart
              </p>
              {phones.map((phone: Phone) => {
                return (
                  <div
                    key={phone.id}
                    className="card mb-3 mx-auto"
                    style={{ maxWidth: "940px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-2 mx-3 my-3">
                        <img
                          src={IMG_URL + `${phone.filename}`}
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-6">
                        <div className="card-body">
                          <h4 className="card-title">
                            {phone.name + " " + phone.description}
                          </h4>
                          <p className="card-text">{phone.color}</p>
                          <p className="card-text">
                            <span>{phone.brand}</span>
                          </p>
                          <p className="card-text">
                            <span>{phone.internalMemory}</span>
                          </p>
                        </div>
                      </div>
                      <div className="col-1 mt-3">
                        <button
                          className="btn btn-default"
                          disabled={phoneInCart.get(phone.id) === 99}
                          onClick={() => onIncrease(phone.id)}
                        >
                          <FontAwesomeIcon size="lg" icon={faChevronUp} />
                        </button>
                        <input
                          type="text"
                          className="form-control input-number"
                          style={{ width: "45px" }}
                          value={phoneInCart.get(phone.id)}
                          onChange={(event) =>
                            handleInputChange(event, phone.id)
                          }
                        />
                        <button
                          className="btn btn-default"
                          disabled={phoneInCart.get(phone.id) === 1}
                          onClick={() => onDecrease(phone.id)}
                        >
                          <FontAwesomeIcon size="lg" icon={faChevronDown} />
                        </button>
                      </div>
                      <div className="col-2">
                        <div className="card-body">
                          <h5 className="card-title">
                            <span>
                              $ {phone.price * phoneInCart.get(phone.id)}
                            </span>
                          </h5>
                          <button
                            className="btn btn-warning mb-2"
                            onClick={() => deleteFromCart(phone.id)}
                          >
                            <FontAwesomeIcon
                              className="mr-2"
                              icon={faMinusSquare}
                            />{" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <hr className="my-3" />
              <div className="row">
                <div className="col-9">
                  <p className="h5 text-right">
                    Total: $ <span>{totalPrice}</span>
                  </p>
                </div>
                <div className="col-3">
                  <div className="form-row">
                    <Link to={"/order"}>
                      <button className="btn btn-success">
                        <FontAwesomeIcon
                          className="mr-2"
                          icon={faShoppingBag}
                        />{" "}
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
