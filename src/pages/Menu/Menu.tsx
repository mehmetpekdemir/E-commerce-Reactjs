import React, { FC, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Checkbox from "../../component/CheckBox/Checkbox";
import CheckboxRadio from "../../component/CheckboxRadio/CheckboxRadio";
import MenuCards from "../../component/MenuCards/MenuCards";
import { phone, price } from "./MenuData";
import { fetchPhonesByFilterParams } from "../../redux/thunks/phone-thunks";
import "./MenuStyle.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { FilterParamsType, Phone } from "../../types/types";

const Menu: FC = () => {
  const dispatch = useDispatch();
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.phone.phones
  );
  const [filterParams, setFilterParams] = useState<FilterParamsType>({
    brands: [],
    prices: [],
  });
  const { state } = useLocation<{ id: string }>();

  const handlePrice = (value: number): Array<number> => {
    let find = price.find((item) => item.id === value);
    return find!.array;
  };

  const getProducts = (variables: FilterParamsType): void => {
    dispatch(fetchPhonesByFilterParams(variables));
  };

  const handleFilters = (
    filters: Array<string> | number,
    category: string
  ): void => {
    const newFilters: any = filterParams;
    newFilters[category] = filters;

    if (category === "prices") {
      let priceValues = handlePrice(filters as number);
      newFilters[category] = priceValues;
    }
    getProducts(newFilters);
    setFilterParams(newFilters);
  };

  return (
    <div className="container d-flex">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Phones</h3>
        </div>
        <ul className="list-unstyled components">
          <h5>Brands</h5>
          <li className="active mb-2" id="homeSubmenu">
            <Checkbox
              list={phone}
              handleFilters={(filters) => handleFilters(filters, "brands")}
            />
          </li>
          <h5>Price</h5>
          <li className="active mb-2">
            <CheckboxRadio
              list={price}
              handleFilters={(filters) => handleFilters(filters, "prices")}
            />
          </li>
        </ul>
      </nav>
      <Route
        exact
        component={() => (
          <MenuCards
            phones={phones}
            itemsPerPage={16}
            searchByData={[{ label: "Phone name", value: "phoneName" }]}
          />
        )}
      />
    </div>
  );
};

export default Menu;
