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
  name: string;
  code: string;
  price: number;
  stockAmount: number;
  image: string;
  description: string;
  filename: string;
  color: string;
  brand: any;
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
    name: "",
    code: "",
    price: 0,
    stockAmount: 0,
    image: "",
    description: "",
    filename: "",
    color: "",
    brand: "",
    internalMemory: "",
  };

  const [
    {
      name,
      code,
      price,
      stockAmount,
      image,
      description,
      filename,
      color,
      brand,
      internalMemory,
    },
    setState,
  ] = useState(initialState);
  const [showToast, setShowToast] = useState(false);

  const {
    name,
    code,
    price,
    stockAmount,
    image,
    description,
    filename,
    color,
    brand,
    internalMemory,
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
    bodyFormData.append("file", filename);
    bodyFormData.append(
      "phone",
      new Blob(
        [
          JSON.stringify({
            name,
            code,
            price,
            stockAmount,
            image,
            description,
            filename,
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
          <div className="form row">
            <div className="col">
              <label>Phone title: </label>
              <input
                type="text"
                className={
                  perfumeTitleError ? "form-control is-invalid" : "form-control"
                }
                name="perfumeTitle"
                value={perfumeTitle}
                placeholder="Enter the perfume title"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{perfumeTitleError}</div>
            </div>
            <div className="col">
              <label>Brand: </label>
              <input
                type="text"
                className={
                  perfumerError ? "form-control is-invalid" : "form-control"
                }
                name="perfumer"
                value={perfumer}
                placeholder="Enter the brand"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{perfumerError}</div>
            </div>
          </div>
          <div className="form row mt-3">
            <div className="col">
              <label>Release year: </label>
              <input
                type="text"
                className={
                  yearError ? "form-control is-invalid" : "form-control"
                }
                name="year"
                value={year}
                placeholder="Enter the release year"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{yearError}</div>
            </div>
            <div className="col">
              <label>Manufacturer country: </label>
              <input
                type="text"
                className={
                  countryError ? "form-control is-invalid" : "form-control"
                }
                name="country"
                value={country}
                placeholder="Enter the manufacturer country"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{countryError}</div>
            </div>
          </div>
          <div className="form row mt-3">
            <div className="col">
              <label>Perfume type: </label>
              <select
                name="type"
                className={
                  typeError ? "form-control is-invalid" : "form-control"
                }
                onChange={handleInputChange}
              >
                <option hidden={true} value=""></option>
                <option value="Eau de Parfum">Eau de Parfum</option>
                <option value="Eau de Toilette">Eau de Toilette</option>
              </select>
              <div className="invalid-feedback">{typeError}</div>
            </div>
            <div className="col">
              <label>Volume: </label>
              <input
                type="text"
                className={
                  volumeError ? "form-control is-invalid" : "form-control"
                }
                name="volume"
                value={volume}
                placeholder="Enter the volume"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{volumeError}</div>
            </div>
          </div>
          <div className="form row mt-3">
            <div className="col">
              <label>Gender: </label>
              <select
                name="perfumeGender"
                className={
                  perfumeGenderError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                onChange={handleInputChange}
              >
                <option hidden={true} value=""></option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <div className="invalid-feedback">{perfumeGenderError}</div>
            </div>
            <div className="col">
              <label>Top notes: </label>
              <input
                type="text"
                className={
                  fragranceTopNotesError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="fragranceTopNotes"
                value={fragranceTopNotes}
                placeholder="Enter the top notes"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{fragranceTopNotesError}</div>
            </div>
          </div>
          <div className="form row mt-3">
            <div className="col">
              <label>Heart notes: </label>
              <input
                type="text"
                className={
                  fragranceMiddleNotesError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="fragranceMiddleNotes"
                value={fragranceMiddleNotes}
                placeholder="Enter the heart notes"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">
                {fragranceMiddleNotesError}
              </div>
            </div>
            <div className="col">
              <label>Base notes: </label>
              <input
                type="text"
                className={
                  fragranceBaseNotesError
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="fragranceBaseNotes"
                value={fragranceBaseNotes}
                placeholder="Enter the base notes"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{fragranceBaseNotesError}</div>
            </div>
          </div>
          <div className="form row mt-3">
            <div className="col">
              <label>Price: </label>
              <input
                type="text"
                className={
                  priceError ? "form-control is-invalid" : "form-control"
                }
                name="price"
                value={price}
                placeholder="Enter the price"
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">{priceError}</div>
            </div>
            <div className="col" style={{ marginTop: "35px" }}>
              <input type="file" name="file" onChange={handleFileChange} />
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
