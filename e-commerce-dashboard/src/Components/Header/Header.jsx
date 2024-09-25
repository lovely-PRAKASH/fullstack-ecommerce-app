import React, { useContext } from "react";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import CountryDrop from "../CountryDropDown/CountryDrop";
import { Button } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Badge from "@mui/material/Badge";
import SearchBox from "./SearchBox/SearchBox";
import NavBar from "./Navigation/NavBar";
import { myContext } from "../../App";

function Header({cartItems}) {

  const context=useContext(myContext);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty * context.dollerToRupees,
    0
  );

  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container scrolling-container">
          <p className="mb-0 mt-0 text-center scrolling-text">
           New Customers: Use Code WELCOME10 for 10% Off! |
           Low Stock Alert: Grab Your Favorites Before They're Gone!
          </p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <div className="col-sm-10 d-flex align-items-center part2">
              {
                context.countryList?.length!==0 && <CountryDrop />
              }
              {/* searchbar start here */}
              <SearchBox />
              {/* searchbar ends here */}
              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                  <FaRegUser />
                </Button>
                <div className="cartTab ml-auto  d-flex align-items-center">
                  <span className="price">₹{totalAmount.toFixed(2)}</span>
                  <div className="position-relative ml-2">
                    <Button className="cartIcon ml-2">
                      <Link to={'/cart'}>
                      <Badge badgeContent={cartItems.length} color="error">
                        <LiaShoppingBagSolid />
                      </Badge>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* nav bar starts here */}
      {/* <NavBar /> */}
      {/* nav bar ends here */}
    </div>
  );
}

export default Header;
