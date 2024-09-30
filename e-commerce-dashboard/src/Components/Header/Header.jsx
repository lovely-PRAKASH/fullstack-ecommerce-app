import React, { useContext, useState } from "react";
import NavBar from "./Navigation/NavBar"
import logo from "../../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import CountryDrop from "../CountryDropDown/CountryDrop";
import { Button, Menu, MenuItem } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Badge from "@mui/material/Badge";
import SearchBox from "./SearchBox/SearchBox";
import { myContext } from "../../App";

function Header({ cartItems }) {
  const context = useContext(myContext);
  const [isOpen, setisOpen] = useState(null); // State to control the menu visibility
  const navigate = useNavigate(); // Hook for navigation

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.qty * context.dollerToRupees,
    0
  );

  const handleClick = (event) => {
    setisOpen(event.currentTarget); // Open the menu when the user icon is clicked
  };

  const handleClose = () => {
    setisOpen(null); // Close the menu
  };

  const handleLogout = () => {
    // Clear user data and redirect to login page
    // localStorage.removeItem("isRegistered");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleProfile = () => {
    // Navigate to profile page or perform relevant action
    console.log("Profile clicked");
    handleClose();
  };

  const handleMyAccount = () => {
    // Navigate to account page or perform relevant action
    console.log("My account clicked");
    handleClose();
  };

  return (
    <div className="headerWrapper">
      <div className="top-strip bg-blue">
        <div className="container scrolling-container">
          <p className="mb-0 mt-0 text-center scrolling-text">
            New Customers: Use Code WELCOME10 for 10% Off! | Low Stock Alert:
            Grab Your Favorites Before They're Gone!
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
              {context.countryList?.length !== 0 && <CountryDrop />}
              {/* searchbar start here */}
              <SearchBox />
              {/* searchbar ends here */}
              <div className="part3 d-flex align-items-center ml-auto">
                <Button
                  className="circle mr-3"
                  id="demo-positioned-menu"
                  onClick={handleClick}
                >
                  <FaRegUser />
                </Button>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={isOpen}
                  open={Boolean(isOpen)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleMyAccount}>My account</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
              <div className="cartTab ml-auto  d-flex align-items-center">
                <span className="price headerprice">₹{totalAmount.toFixed(2)}</span>
                <div className="position-relative ml-2">
                  <Button className="cartIcon ml-2">
                    <Link to={"/cart"}>
                      <Badge badgeContent={cartItems.length} color="error">
                        <LiaShoppingBagSolid color="black"/>
                      </Badge>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* nav bar starts here */}
      <NavBar />
      {/* nav bar ends here */}
    </div>
  );
}

export default Header;
