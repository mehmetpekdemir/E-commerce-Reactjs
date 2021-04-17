import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

import { Phone } from "../../../types/types";
import PaginationItem from "../../../component/Pagination/PaginationItem";
import SearchForm from "../../../component/SearchForm/SearchForm";
import PhoneCardItem from "../../../component/PhoneCardItem/PhoneCardItem";
import usePagination from "../../../component/Pagination/usePagination";
import { AppStateType } from "../../../redux/reducers/root-reducer";

type PropsType = {
  startFrom?: number;
};

const PhoneList: FC<PropsType> = ({ startFrom }) => {
  const phones: Array<Phone> = useSelector(
    (state: AppStateType) => state.phone.phones
  );

  const itemsPerPage = 24;
  const searchByData = [
    { label: "Brand", value: "phones" },
    { label: "Phone title", value: "name" },
    { label: "Manufacturer country", value: "country" },
  ];

  const {
    slicedData,
    pagination,
    prevPage,
    nextPage,
    changePage,
    setFilteredData,
    setSearching,
  } = usePagination({
    itemsPerPage,
    phones,
    startFrom,
  });

  return (
    <div className="container">
      <h4>
        <FontAwesomeIcon className="ml-2 mr-2" icon={faList} /> List of phones
      </h4>
      <br />
      <div className="container form row">
        <PaginationItem
          pagination={pagination}
          prevPage={prevPage}
          changePage={changePage}
          nextPage={nextPage}
        />
        <div className="ml-5">
          <SearchForm
            data={phones}
            searchByData={searchByData}
            setFilteredData={setFilteredData}
            setSearching={setSearching}
          />
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          {slicedData.map((phone: Phone) => {
            return (
              <PhoneCardItem
                key={phone.id}
                phone={phone}
                colSize={3}
                link={"/account/admin/phones"}
                btnName={"Edit"}
              />
            );
          })}
        </div>
      </div>
      <PaginationItem
        pagination={pagination}
        prevPage={prevPage}
        changePage={changePage}
        nextPage={nextPage}
      />
    </div>
  );
};

export default PhoneList;
