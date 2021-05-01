import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ToastShow from "../../../component/Toasts/ToastShow";
import { addPhone } from "../../../redux/thunks/admin-thunks";
import { AppStateType } from "../../../redux/reducers/root-reducer";
import { PhoneErrors } from "../../../types/types";
import { fetchPhones } from "../../../redux/thunks/phone-thunks";

type InitialStateType = {
  productName: string;
  productCode: string;
  productPrice: number;
  stockAmount: number;
  image: string;
  productDescription: string;
  fileName: string;
  color: string;
  brand: string;
  internalMemory: string;
};

const AddPhone: FC = () => {
  const dispatch = useDispatch();
  const isPhoneAdded: boolean = useSelector(
    (state: AppStateType) => state.admin.isPhoneAdded
  );
  const errors: Partial<PhoneErrors> = useSelector(
    (state: AppStateType) => state.admin.errors
  );

  const initialState: InitialStateType = {
    productName: "",
    productCode: "",
    productPrice: 0,
    stockAmount: 0,
    image: "",
    productDescription: "",
    fileName: "",
    color: "",
    brand: "",
    internalMemory: "",
  };

  const [
    {
      productName,
      productCode,
      productPrice,
      stockAmount,
      image,
      productDescription,
      fileName,
      color,
      brand,
      internalMemory,
    },
    setState,
  ] = useState(initialState);
  const [showToast, setShowToast] = useState(false);

  const {
    productNameError,
    productCodeError,
    productPriceError,
    stockAmountError,
    imageError,
    productDescriptionError,
    colorError,
    brandError,
    internalMemoryError,
  } = errors;

  useEffect(() => {
    if (isPhoneAdded) {
      setState({ ...initialState });
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
      window.scrollTo(0, 0);
      dispatch(fetchPhones());
    }
  }, [isPhoneAdded]);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const bodyFormData: FormData = new FormData();
    bodyFormData.append("fileName", fileName);
    bodyFormData.append(
      "phone",
      new Blob(
        [
          JSON.stringify({
            productName,
            productCode,
            productPrice,
            stockAmount,
            image,
            productDescription,
            fileName,
            color,
            brand,
            internalMemory,
          }),
        ],
        { type: "application/json" }
      )
    );

    dispatch(addPhone(bodyFormData));
  };

  const handleFileChange = (event: any): void => {
    setState((prevState) => ({ ...prevState, file: event.target.files[0] }));
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <ToastShow showToast={showToast} message={"Phone successfully added!"} />
      <div className="container">
        <h4>
          <FontAwesomeIcon className="mr-2" icon={faPlusSquare} />
          Add phone
        </h4>
        <br />
        <form onSubmit={onFormSubmit}>
          <div className="col">
            <div className="col">
              <label>Product code: </label>
              <input
                type="text"
                className={
                  productCodeError ? "form-control is-invalid" : "form-control"
                }
                name="productCode"
                value={productCode}
                placeholder="Enter the product code"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{productCodeError}</div>
            </div>
            <div className="col">
              <label>Product Name: </label>
              <input
                type="text"
                className={
                  productNameError ? "form-control is-invalid" : "form-control"
                }
                name="productName"
                value={productName}
                placeholder="Enter the product name"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{productNameError}</div>
            </div>
          </div>
          <div className="col">
            <div className="col">
              <label>Product price: </label>
              <input
                type="number"
                className={
                  productPriceError ? "form-control is-invalid" : "form-control"
                }
                name="productPrice"
                value={productPrice}
                placeholder="Enter the product price"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{productPriceError}</div>
            </div>
            <div className="col">
              <label>Product description: </label>
              <input
                type="text"
                className={
                  productDescriptionError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="productDescription"
                value={productDescription}
                placeholder="Enter the product description"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{productDescriptionError}</div>
            </div>
            <div className="col">
              <label>Stock amount: </label>
              <input
                type="number"
                className={
                  stockAmountError ? "form-control is-invalid" : "form-control"
                }
                name="stockAmount"
                value={stockAmount}
                placeholder="Enter the stock amount"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{stockAmountError}</div>
            </div>
            <div className="col">
              <label>Brand: </label>
              <input
                type="text"
                className={
                  brandError ? "form-control is-invalid" : "form-control"
                }
                name="brand"
                value={brand}
                placeholder="Enter the internal memory"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{brandError}</div>
            </div>
            <div className="col">
              <label>Color: </label>
              <input
                type="text"
                className={
                  colorError ? "form-control is-invalid" : "form-control"
                }
                name="color"
                value={color}
                placeholder="Enter the internal memory"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{colorError}</div>
            </div>
            <div className="col">
              <label>Internal memory: </label>
              <input
                type="text"
                className={
                  internalMemoryError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="internalMemory"
                value={internalMemory}
                placeholder="Enter the internal memory"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{internalMemoryError}</div>
            </div>
            <div className="col">
              <label>Product image name: </label>
              <input
                type="text"
                className={
                  imageError ? "form-control is-invalid" : "form-control"
                }
                name="image"
                value={image}
                placeholder="Enter the internal memory"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{imageError}</div>
            </div>

            <div className="form row mt-3">
              <div className="col" style={{ marginTop: "35px" }}>
                <input
                  type="file"
                  name="fileName"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-dark mt-3">
            <FontAwesomeIcon className="mr-2" icon={faPlusSquare} />
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPhone;
