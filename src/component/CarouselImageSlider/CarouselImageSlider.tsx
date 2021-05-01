import React, { FC } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const sliderItems = [
  {
    id: "59",
    name: "Photo 2",
    url: "https://i.ibb.co/kJnb7Kd/b3.jpg",
  },
  {
    id: "98",
    name: "Photo 1",
    url: "https://i.ibb.co/x61LHjb/b2.jpg",
  },
  {
    id: "11",
    name: "Photo 3",
    url: "https://i.ibb.co/BqdXL7j/b1.jpg",
  },
];

const CarouselImageSlider: FC = () => {
  const settings = {
    indicators: false,
    fade: true,
    infinite: true,
    interval: 3000,
  };

  return (
    <div>
      <Carousel {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <Carousel.Item key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img className="d-block w-100" src={item.url} alt={item.name} />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselImageSlider;
