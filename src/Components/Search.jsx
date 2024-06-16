import React, { useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="border-2 border-gray-200 rounded flex justify-center items-center p-2 ">
      <input
        value={searchValue}
        placeholder="Search"
        className="w-60 focus:outline-none h-full"
        onChange={handleSearch}
      />
      <button>
        <img src={SearchIcon} />
      </button>
    </div>
  );
};

export default Search;
