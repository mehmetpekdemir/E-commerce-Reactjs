import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { RouteComponentProps } from "react-router-dom";

import { fetchPhone, fetchPhones } from "../../../redux/thunks/phone-thunks";
import { updatePhone } from "../../../redux/thunks/admin-thunks";
import { IMG_URL } from "../../../utils/constants/url";
import { AppStateType } from "../../../redux/reducers/root-reducer";
import { Phone, PhoneErrors } from "../../../types/types";
import ToastShow from "../../../component/Toasts/ToastShow";

const EditPhone: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const dispatch = useDispatch();
  const phoneData: Partial<Phone> = useSelector(
    (state: AppStateType) => state.phone.phone
  );
  const errors: Partial<PhoneErrors> = useSelector(
    (state: AppStateType) => state.admin.errors
  );
  const isPhoneEdited: boolean = useSelector(
    (state: AppStateType) => state.admin.isPhoneEdited
  );
  const [phone, setPhone] = useState<Partial<Phone>>(phoneData);
  const [showToast, setShowToast] = useState(false);

  const {
    productNameError,
    productCodeError,
    productPriceError,
    stockAmountError,
    productDescriptionError,
    colorError,
    brandError,
    internalMemoryError,
    fileNameError,
  } = errors;

  const {
    id,
    productName,
    productCode,
    productPrice,
    stockAmount,
    productDescription,
    fileName,
    color,
    brand,
    internalMemory,
    file,
  } = phone;

  useEffect(() => {
    dispatch(fetchPhone(match.params.id));
  }, []);

  useEffect(() => {
    setPhone(phoneData);
    if (isPhoneEdited) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
      window.scrollTo(0, 0);
      dispatch(fetchPhones());
    }
  }, [phoneData]);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const bodyFormData: FormData = new FormData();
    bodyFormData.append("file", file);
    bodyFormData.append(
      "phone",
      new Blob(
        [
          JSON.stringify({
            id,
            productName,
            productCode,
            productPrice,
            stockAmount,
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

    dispatch(updatePhone(bodyFormData));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, files } = event.target;
    if (files) {
      setPhone({ ...phone, [name]: files[0] });
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    setPhone({ ...phone, [name]: value });
  };

  return (
    <>
      <ToastShow showToast={showToast} message={"Phone successfully edited!"} />
      <div className="container">
        <h4>
          <FontAwesomeIcon className="mr-2" icon={faEdit} />
          Edit phone
        </h4>

        <form onSubmit={onFormSubmit}>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Product code:{" "}
                </label>

                <div className="col-sm-8">
                  <input
                    type="text"
                    className={
                      productCodeError
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="productCode"
                    value={productCode}
                    placeholder="Enter the product code"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{productCodeError}</div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Product Name:{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={
                      productNameError
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="productName"
                    value={productName}
                    placeholder="Enter the product name"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{productNameError}</div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Product price:{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className={
                      productPriceError
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="productPrice"
                    value={productPrice}
                    placeholder="Enter the product price"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{productPriceError}</div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Product Description:{" "}
                </label>
                <div className="col-sm-8">
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
                  <div className="invalid-feedback">
                    {productDescriptionError}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Stock amount:{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="number"
                    className={
                      stockAmountError
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    name="stockAmount"
                    value={stockAmount}
                    placeholder="Enter the stock amount"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{stockAmountError}</div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Brand:{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={
                      brandError ? "form-control is-invalid" : "form-control"
                    }
                    name="brand"
                    value={brand}
                    placeholder="Enter the Brand"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{brandError}</div>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Color:{" "}
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className={
                      colorError ? "form-control is-invalid" : "form-control"
                    }
                    name="color"
                    value={color}
                    placeholder="Enter the color"
                    onChange={handleInputChange}
                  />
                  <div className="invalid-feedback">{colorError}</div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label font-weight-bold">
                  Internal memory:{" "}
                </label>
                <div className="col-sm-8">
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
              </div>
            </div>

            <div className="col-md-6">
              <img
                src={IMG_URL + `${fileName}`}
                className="rounded mx-auto w-100 mb-2"
                alt="empty"
              />
              <input type="file" name="file" onChange={handleFileChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-dark">
            <FontAwesomeIcon className="mr-2" icon={faEdit} />
            Edit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditPhone;
