import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@mui/material";


const SearchBox = () => {
  return (
    <>
      <div className="headerSearch ml-3 mr-3">
        <input type="text" placeholder="Search for products..." />
        <Button className="searchIcon">
          <IoIosSearch />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
