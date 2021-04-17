import React, { FC, useEffect } from "react";

import HomePageTheme from "../../component/HomePageTheme/HomePageTheme";
import CarouselImageSlider from "../../component/CarouselImageSlider/CarouselImageSlider";
import SliderBrands from "../../component/SliderBrands/SliderBrands";
import SliderCards from "../../component/PhoneCardsSlider/PhoneCardsSlider";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../redux/thunks/cart-thunks";

const HomePage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const phonesFromLocalStorage: Map<number, number> = new Map(
      JSON.parse(localStorage.getItem("phones") as string)
    );
    dispatch(fetchCart(Array.from(phonesFromLocalStorage.keys())));
  }, []);

  return (
    <div>
      <CarouselImageSlider />
      <SliderBrands />
      <HomePageTheme />
      <SliderCards />
    </div>
  );
};

export default HomePage;
