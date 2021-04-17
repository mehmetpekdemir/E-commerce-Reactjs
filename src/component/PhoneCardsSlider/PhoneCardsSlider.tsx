import React, { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IMG_URL } from "../../utils/constants/url";
import "./PhoneCardsSlider.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Phone } from "../../types/types";

const PhoneCardsSlider: FC = () => {
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.phone.phones
  );

  const addCarouselItems = (array: Array<Phone>, counter: number) => {
    const phonesId: Array<number> = [
      26,
      43,
      46,
      106,
      34,
      76,
      82,
      85,
      27,
      39,
      79,
      86,
    ];

    return (
      <Carousel.Item>
        <div className="card-deck">
          {array.map((phone: Phone) => {
            for (let i = counter; i < counter + 4; i++) {
              if (phone.id === phonesId[i]) {
                return (
                  <div className="card" key={phone.id}>
                    <img
                      className="d-block mx-auto w-50"
                      src={IMG_URL + `${phone.filename}`}
                    />
                    <div className="card-body text-center">
                      <h5>{phone.name}</h5>
                      <h6>{phone.description}</h6>
                      <h6>
                        $<span>{phone.price}</span>.00
                      </h6>
                      <Link to={`/product/${phone.id}`}>
                        <span className="btn btn-dark">SHOW MORE</span>
                      </Link>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </Carousel.Item>
    );
  };

  const settings = { controls: false };

  return (
    <div>
      <div className="container text-center my-3">
        <h3>PERSONALLY RECOMMENDED</h3>
      </div>
      <div className="container mt-5" id="indicators">
        <form method="get" action="/">
          <Carousel {...settings}>
            {addCarouselItems(phones, 0)}
            {addCarouselItems(phones, 4)}
            {addCarouselItems(phones, 8)}
          </Carousel>
        </form>
      </div>
    </div>
  );
};

export default PhoneCardsSlider;
