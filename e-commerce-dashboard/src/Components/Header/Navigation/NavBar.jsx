import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navpart1">
              <Button className="allCatTab align-items-center">
                <span className="icon1">
                  <RiMenu3Fill />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
            </div>
            <div className="col-sm-9 navpart2 d-flex align-items-center">
                <ul className="list list-inline ml-auto">
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item"><Link to="/">Shop</Link></li>
                    <li className="list-inline-item"><Link to="/">Meats&SeaFood</Link></li>
                    <li className="list-inline-item"><Link to="/">Bakery</Link></li>
                    <li className="list-inline-item"><Link to="/">Beverages</Link></li>
                    <li className="list-inline-item"><Link to="/">Blog</Link></li>
                    <li className="list-inline-item"><Link to="/">Contact</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
