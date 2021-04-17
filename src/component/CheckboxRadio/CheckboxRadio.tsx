import React, { ChangeEvent, FC, useState } from "react";
import { PhonePrice } from "../../types/types";

type PropsType = {
  handleFilters: (filters: number) => void;
  list: Array<PhonePrice>;
};

const CheckboxRadio: FC<PropsType> = ({ handleFilters, list }) => {
  const [priceValue, setPriceValue] = useState<number>(0);

  const renderRadioBox = () =>
    list &&
    list.map((value: PhonePrice) => (
      <div key={value.id} className="checkbox ml-3">
        <label>
          <input type="radio" name="price" value={value.id} />
          <span className="cr">
            <i className="cr-icon fas fa-check"></i>
          </span>
          {value.name}
        </label>
      </div>
    ));

  const handleChange = (event: ChangeEvent<HTMLLIElement>): void => {
    setPriceValue(event.target.value);
    handleFilters(event.target.value);
  };

  return (
    <ul className="list-unstyled">
      <li onChange={handleChange} value={priceValue}>
        {renderRadioBox()}
      </li>
    </ul>
  );
};

export default CheckboxRadio;
