import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ToastShow from "../../../component/Toasts/ToastShow";
import {addPhone, formReset} from "../../../redux/thunks/admin-thunks";
import {AppStateType} from "../../../redux/reducers/root-reducer";
import {PhoneErrors} from "../../../types/types";
import {fetchPhones} from "../../../redux/thunks/phone-thunks";

type InitialStateType = {
    name: string
    description: string
    price: number
    color: string
    internalMemory: string
    image: string
    filename: string
    fragranceTopNotes: string
    fragranceMiddleNotes: string
    fragranceBaseNotes: string
    file: string | Blob
};

const AddPhone: FC = () => {
    const dispatch = useDispatch();
    const isPhoneAdded: boolean = useSelector((state: AppStateType) => state.admin.isPhoneAdded);
    const errors: Partial<PhoneErrors> = useSelector((state: AppStateType) => state.admin.errors);

    const initialState: InitialStateType = {
        name: "",
        description: "",
        color: "",
        image: "",
        price: "",
        type: "",
        internalMemory: "",
        filename: "",
        fragranceTopNotes: "",
        fragranceMiddleNotes: "",
        fragranceBaseNotes: "",
        file: ""
    };

    const [{
        name,
        description,
        color,
        image,
        price,
        type,
        internalMemory,
        fragranceTopNotes,
        fragranceMiddleNotes,
        fragranceBaseNotes,
        file
    }, setState] = useState(initialState);
    const [showToast, setShowToast] = useState(false);

    const {
        phoneTitleError,
        phoneError,
        yearError,
        countryError,
        typeError,
        volumeError,
        perfumeGenderError,
        fragranceTopNotesError,
        fragranceMiddleNotesError,
        fragranceBaseNotesError,
        priceError
    } = errors;

    useEffect(() => {
        if (isPhoneAdded) {
            setState({...initialState});
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
                dispatch(formReset());
            }, 5000);
            window.scrollTo(0, 0);
            dispatch(fetchPhones());
        }
    }, [isPhoneAdded]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const bodyFormData: FormData = new FormData();
        bodyFormData.append("file", file);
        bodyFormData.append("perfume", new Blob([JSON.stringify({
            name, description, color, image, type, price, internalMemory, fragranceTopNotes,
            fragranceMiddleNotes, fragranceBaseNotes
        })], {type: "application/json"}));

        dispatch(addPhone(bodyFormData));
    };

    const handleFileChange = (event: any): void => {
        setState(prevState => ({...prevState, file: event.target.files[0]}));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const {name, value} = event.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    return (
        <>
            <ToastShow showToast={showToast} message={"Perfume successfully added!"}/>
            <div className="container">
                <h4><FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Add perfume</h4>
                <br/>
                <form onSubmit={onFormSubmit}>
                    <div className="form row">
                        <div className="col">
                            <label>Perfume title: </label>
                            <input
                                type="text"
                                className={phoneTitleError ? "form-control is-invalid" : "form-control"}
                                name="name"
                                value={name}
                                placeholder="Enter the name"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{phoneTitleError}</div>
                        </div>
                        <div className="col">
                            <label>Brand: </label>
                            <input
                                type="text"
                                className={phoneError ? "form-control is-invalid" : "form-control"}
                                name="description"
                                value={description}
                                placeholder="Enter the brand"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{phoneError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Release year: </label>
                            <input
                                type="text"
                                className={colorError ? "form-control is-invalid" : "form-control"}
                                name="color"
                                value={color}
                                placeholder="Enter the release year"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{colorError}</div>
                        </div>
                        <div className="col">
                            <label>Manufacturer country: </label>
                            <input
                                type="text"
                                className={imageError ? "form-control is-invalid" : "form-control"}
                                name="image"
                                value={image}
                                placeholder="Enter the manufacturer country"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{imageError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Phone type: </label>
                            <select name="type"
                                    className={typeError ? "form-control is-invalid" : "form-control"}
                                    onChange={handleInputChange}>
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
                                className={volumeError ? "form-control is-invalid" : "form-control"}
                                name="price"
                                value={price}
                                placeholder="Enter the price"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{volumeError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Gender: </label>
                            <select name="perfumeGender"
                                    className={perfumeGenderError ? "form-control is-invalid" : "form-control"}
                                    onChange={handleInputChange}>
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
                                className={fragranceTopNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceTopNotes"
                                value={fragranceTopNotes}
                                placeholder="Enter the top notes"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceTopNotesError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Heart notes: </label>
                            <input
                                type="text"
                                className={fragranceMiddleNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceMiddleNotes"
                                value={fragranceMiddleNotes}
                                placeholder="Enter the heart notes"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceMiddleNotesError}</div>
                        </div>
                        <div className="col">
                            <label>Base notes: </label>
                            <input
                                type="text"
                                className={fragranceBaseNotesError ? "form-control is-invalid" : "form-control"}
                                name="fragranceBaseNotes"
                                value={fragranceBaseNotes}
                                placeholder="Enter the base notes"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{fragranceBaseNotesError}</div>
                        </div>
                    </div>
                    <div className="form row mt-3">
                        <div className="col">
                            <label>Price: </label>
                            <input
                                type="text"
                                className={priceError ? "form-control is-invalid" : "form-control"}
                                name="price"
                                value={price}
                                placeholder="Enter the price"
                                onChange={handleInputChange}/>
                            <div className="invalid-feedback">{priceError}</div>
                        </div>
                        <div className="col" style={{marginTop: "35px"}}>
                            <input type="file"
                                   name="file"
                                   onChange={handleFileChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark mt-3">
                        <FontAwesomeIcon className="mr-2" icon={faPlusSquare}/>Add
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddPhone;
