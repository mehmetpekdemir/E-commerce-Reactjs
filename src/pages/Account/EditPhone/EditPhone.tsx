import React, {ChangeEvent, FC, FormEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {RouteComponentProps} from 'react-router-dom';

import {fetchPhone, fetchPhones} from "../../../redux/thunks/perfume-thunks";
import {formReset, updatePhone} from "../../../redux/thunks/admin-thunks";
import {IMG_URL} from "../../../utils/constants/url";
import {AppStateType} from "../../../redux/reducers/root-reducer";
import {Phone, PhoneErrors} from "../../../types/types";
import ToastShow from "../../../component/Toasts/ToastShow";
import {phone} from "../../Menu/MenuData";

const EditPhone: FC<RouteComponentProps<{ id: string }>> = ({match}) => {
    const dispatch = useDispatch();
    const phoneData: Partial<Phone> = useSelector((state: AppStateType) => state.perfume.perfume);
    const errors: Partial<PhoneErrors> = useSelector((state: AppStateType) => state.admin.errors);
    const isPerfumeEdited: boolean = useSelector((state: AppStateType) => state.admin.isPhoneEdited);
    const [perfume, setPerfume] = useState<Partial<Phone>>(phoneData);
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

    const {
        id,
        name,
        code,
        price,
        stockAmount,
        image,
        description,
        filename,
        fragranceTopNotes,
        fragranceMiddleNotes,
        fragranceBaseNotes,
        color,
        internalMemory,
        reviews
    } = perfume;

    useEffect(() => {
        dispatch(fetchPhone(match.params.id));
    }, []);

    useEffect(() => {
        setPerfume(phoneData);
        if (isPerfumeEdited) {
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false)
                dispatch(formReset());
            }, 5000);
            window.scrollTo(0, 0);
            dispatch(fetchPhones());
        }
    }, [phoneData]);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const bodyFormData: FormData = new FormData();
        bodyFormData.append("file", file);
        bodyFormData.append("perfume", new Blob([JSON.stringify({
            id,
            name,
            code,
            price,
            stockAmount,
            image,
            description,
            fragranceTopNotes,
            fragranceMiddleNotes,
            fragranceBaseNotes,
            filename
        })], {type: "application/json"}));

        dispatch(updatePhone(bodyFormData));
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {name, files} = event.target;
        if (files) {
            setPerfume({...perfume, [name]: files[0]});
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>): void => {
        const {name, value} = event.target;
        setPerfume({...perfume, [name]: value});
    };

    return (
        <>
            <ToastShow showToast={showToast} message={"Phone successfully edited!"}/>
            <div className="container">
                <h4><FontAwesomeIcon className="mr-2" icon={faEdit}/>Edit perfume</h4>
                <form onSubmit={onFormSubmit}>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Phone title: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={phoneTitleError ? "form-control is-invalid" : "form-control"}
                                        name="name"
                                        value={name}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{phoneTitleError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Code: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={phoneError ? "form-control is-invalid" : "form-control"}
                                        name="code"
                                        value={code}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{phoneError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Price: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={priceError ? "form-control is-invalid" : "form-control"}
                                        name="price"
                                        value={price}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{priceError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Stock Amount: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={stockAmountError ? "form-control is-invalid" : "form-control"}
                                        name="stockAmount"
                                        value={stockAmount}
                                        onChange={handleInputChange}/>

                                    <div className="invalid-feedback">{stockAmountError}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Image: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={imageError ? "form-control is-invalid" : "form-control"}
                                        name="image"
                                        value={image}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{imageError}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Description: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={descriptionError ? "form-control is-invalid" : "form-control"}
                                        name="description"
                                        value={description}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{descriptionError}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Color: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={colorError ? "form-control is-invalid" : "form-control"}
                                        name="color"
                                        value={color}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{colorError}</div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Top notes: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={fragranceTopNotesError ? "form-control is-invalid" : "form-control"}
                                        name="fragranceTopNotes"
                                        value={fragranceTopNotes}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{fragranceTopNotesError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Heart notes: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={fragranceMiddleNotesError ? "form-control is-invalid" : "form-control"}
                                        name="fragranceMiddleNotes"
                                        value={fragranceMiddleNotes}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{fragranceMiddleNotesError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Base notes: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={fragranceBaseNotesError ? "form-control is-invalid" : "form-control"}
                                        name="fragranceBaseNotes"
                                        value={fragranceBaseNotes}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{fragranceBaseNotesError}</div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label font-weight-bold">Price: </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className={priceError ? "form-control is-invalid" : "form-control"}
                                        name="price"
                                        value={price}
                                        onChange={handleInputChange}/>
                                    <div className="invalid-feedback">{priceError}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={IMG_URL + `${filename}`} className="rounded mx-auto w-100 mb-2"/>
                            <input type="file" name="file" onChange={handleFileChange}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">
                        <FontAwesomeIcon className="mr-2" icon={faEdit}/>Edit
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditPhone;
