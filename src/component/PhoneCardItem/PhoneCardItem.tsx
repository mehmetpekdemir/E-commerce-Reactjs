import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { IMG_URL } from "../../utils/constants/url";
import { Phone } from "../../types/types";

type PropsType = {
  key: number;
  phone: Phone;
  colSize: number;
  link: string;
  btnName: string;
};

const PhoneCardItem: FC<PropsType> = ({
  key,
  phone,
  colSize,
  link,
  btnName,
}) => {
  return (
    <div key={key} className={`col-lg-${colSize}`}>
      <div className="card mb-5" style={{ height: "293px" }}>
        <LazyLoadImage
          effect="blur"
          className="d-block mx-auto"
          style={{ width: "89px", height: "89px" }}
          src={IMG_URL + `${phone.filename}`}
        />
        <div className="card-body text-center">
          <h5>{phone.name}</h5>
          <h6>{phone.description}</h6>
          <h6>
            <span>${phone.price}</span>.00
          </h6>
        </div>
        <div className="text-center align-items-end mb-3">
          <Link to={`${link}/${phone.id}`}>
            <span className="btn btn-dark">{btnName}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCardItem;
