import React, { FC, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IMG_URL } from "../../utils/constants/url";
import { fetchPhones } from "../../redux/thunks/phone-thunks";
import "./PhoneCardsSlider.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Phone } from "../../types/types";

const PhoneCardsSlider: FC = () => {
  const dispatch = useDispatch();
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.phone.phones
  );

  useEffect(() => {
    dispatch(fetchPhones());
  }, []);

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
                      src={IMG_URL + phone.fileName}
                      alt="empty"
                    />
                    <div className="card-body text-center">
                      <h5>{phone.productName}</h5>
                      <h6>
                        $<span>{phone.productPrice}</span>.00
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
      
    </div>
  );
};

export default PhoneCardsSlider;
