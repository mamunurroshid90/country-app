import React, { useEffect, useState } from "react";

const SearchCountry = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);
  return (
    <>
      <input
        className=" border-2 px-2 py-2 rounded-lg w-[400px] mb-3"
        type="text"
        placeholder="Search country"
        value={searchText}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchCountry;
