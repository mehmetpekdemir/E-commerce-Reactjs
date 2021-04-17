import React, { FC, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Checkbox from "../../component/CheckBox/Checkbox";
import CheckboxRadio from "../../component/CheckboxRadio/CheckboxRadio";
import MenuCards from "../../component/MenuCards/MenuCards";
import { phone, price } from "./MenuData";

import "./MenuStyle.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { FilterParamsType, Phone } from "../../types/types";

const Menu: FC = () => {
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.phone.phones
  );
  const [filterParams, setFilterParams] = useState<FilterParamsType>({
    phones: [],
    prices: [],
  });
  const { state } = useLocation<{ id: string }>();

  const handlePrice = (value: number): Array<number> => {
    let find = price.find((item) => item.id === value);
    return find!.array;
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
    setFilterParams(newFilters);
  };

  return (
    <div className="container d-flex">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Phone</h3>
        </div>
        <ul className="list-unstyled components">
          <h5>Brand</h5>
          <li className="active mb-2" id="homeSubmenu">
            <Checkbox
              list={phone}
              handleFilters={(filters) => handleFilters(filters, "phones")}
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
            searchByData={[
              { label: "Brand", value: "brand" },
              { label: "Phone title", value: "description" },
            ]}
          />
        )}
      />
    </div>
  );
};

export default Menu;
