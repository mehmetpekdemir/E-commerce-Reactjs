import React, { FC, FormEvent, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Phone } from "../../types/types";

type PropsType = {
  data: Array<Phone>;
  searchByData: Array<{ label: string; value: string }>;
  setFilteredData: (
    value: ((prevState: Array<Phone>) => Array<Phone>) | Array<Phone>
  ) => void;
  setSearching: (value: ((prevState: boolean) => boolean) | boolean) => void;
};

const SearchForm: FC<PropsType> = ({
  data,
  searchByData,
  setFilteredData,
  setSearching,
}) => {
  const [search, setSearch] = useState<string>("");
  const [searchFor, setSearchFor] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>(
    searchByData && searchByData.length > 0 ? searchByData[0].value : ""
  );

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (search.trim() !== "") {
      setSearching(true);
      const copiedData: Array<Phone> = [...data];
      const filtered: Array<Phone> = copiedData.filter((phone: any) => {
        let searchKey: string = "phone";
        if (searchByData && searchByData.length > 0) {
          searchKey = searchBy;
        }
        return phone[searchKey]
          .toLowerCase()
          .includes(search.trim().toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
    setSearchFor(search);
  };

  return (
    <form onSubmit={submitHandler} style={{ justifyContent: "center" }}>
      <div className="row">
        {searchByData && searchByData.length > 0 && (
          <div className="col-sm-6">
            <select
              className="form-control"
              value={searchBy}
              onChange={(event) => setSearchBy(event.target.value)}
            >
              {searchByData.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          <FontAwesomeIcon icon={faSearch} /> Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
