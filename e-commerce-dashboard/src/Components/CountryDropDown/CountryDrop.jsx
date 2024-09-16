import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";

const CountryDrop = () => {
  return (
    <>
      <Button className="countryDrop" style={{outline:'none'}} >
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">India</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
    </>
  );
};

export default CountryDrop;
