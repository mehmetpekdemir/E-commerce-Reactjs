import React, { FC } from "react";

import usePagination from "../Pagination/usePagination";
import PhoneCardItem from "../PhoneCardItem/PhoneCardItem";
import PaginationItem from "../Pagination/PaginationItem";
import SearchForm from "../SearchForm/SearchForm";
import { Phone } from "../../types/types";

type PropsType = {
  phones: Array<Phone>;
  itemsPerPage: number;
  startFrom?: number;
  searchByData: Array<{ label: string; value: string }>;
};

const MenuCards: FC<PropsType> = ({
  phones,
  itemsPerPage,
  startFrom,
  searchByData,
}) => {
  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
  } = usePagination({ itemsPerPage, phones, startFrom });

  return (
    <div className="container">
      <div className="container-fluid row mt-5 ml-2">
        <SearchForm
          data={phones}
          searchByData={searchByData}
          setFilteredData={setFilteredData}
          setSearching={setSearching}
        />
      </div>
      <div className="row mt-3 ml-2">
        <div className="container-fluid">
          <PaginationItem
            pagination={pagination}
            prevPage={prevPage}
            changePage={changePage}
            nextPage={nextPage}
          />
          <div className="row">
            {slicedData.map((phone: Phone) => {
              return (
                <PhoneCardItem
                  key={phone.id}
                  phone={phone}
                  colSize={3}
                  link={"/product"}
                  btnName={"SHOW MORE"}
                />
              );
            })}
          </div>
          <PaginationItem
            pagination={pagination}
            prevPage={prevPage}
            changePage={changePage}
            nextPage={nextPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
