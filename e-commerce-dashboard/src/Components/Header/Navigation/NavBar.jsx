import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";


const NavBar = () => {
  const [navBarToggle, setNavBarToggle] = useState(false);

  return (
    <>
      <nav className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navpart1">
              <div className="catwrapper">
                <Button
                  className="allCatTab align-items-center"
                  onClick={() => {
                    setNavBarToggle(!navBarToggle);
                  }}
                >
                  <span className="icon1">
                    <RiMenu3Fill />
                  </span>
                  <span className="text">ALL CATEGORIES</span>
                  <span className="icon2 ml-2">
                    <FaAngleDown />
                  </span>
                </Button>
                <div
                  className={`sideNavbar ₹{
                    navBarToggle === true ? "open" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">
                        <Button>fruits & vegetables <LiaAngleRightSolid className="ml auto"/>
                        </Button>
                      </Link>
                      <div className="subMenu">
                        <Link to="/">
                          <span>cuts & sprouts</span>
                        </Link>
                        <Link to="/">
                          <span>Exotic fruits & veggies</span>
                        </Link>
                        <Link to="/">
                          <span>Fresh fruits</span>
                        </Link>
                        <Link to="/">
                          <span>fresh vegetables</span>
                        </Link>
                        <Link to="/">
                          <span>herbs & seasonings</span>
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>meats & seafood</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>breakfast & dairy</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Beverages</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Breads & Bakery</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>frozen foods</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>Biscuits & snacks</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>grocery & staples</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>value of the day</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>top 100 offers</Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>New arrivals</Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*             navBar part2 strip */}
            <div className="col-sm-9 navpart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to="/">Home</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>Home1</span>
                    </Link>
                    <Link to="/">
                      <span>Home2</span>
                    </Link>
                    <Link to="/">
                      <span>Home3</span>
                    </Link>
                    <Link to="/">
                      <span>Home4</span>
                    </Link>
                    <Link to="/">
                      <span>Home5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Shop</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>item1</span>
                    </Link>
                    <Link to="/">
                      <span>item2</span>
                    </Link>
                    <Link to="/">
                      <span>item3</span>
                    </Link>
                    <Link to="/">
                      <span>item4</span>
                    </Link>
                    <Link to="/">
                      <span>item5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Meats&SeaFood</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>meat1</span>
                    </Link>
                    <Link to="/">
                      <span>meat2</span>
                    </Link>
                    <Link to="/">
                      <span>meat3</span>
                    </Link>
                    <Link to="/">
                      <span>meat4</span>
                    </Link>
                    <Link to="/">
                      <span>meat5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Bakery</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>item1</span>
                    </Link>
                    <Link to="/">
                      <span>item2</span>
                    </Link>
                    <Link to="/">
                      <span>item3</span>
                    </Link>
                    <Link to="/">
                      <span>item4</span>
                    </Link>
                    <Link to="/">
                      <span>item5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Beverages</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>beverages1</span>
                    </Link>
                    <Link to="/">
                      <span>beverages2</span>
                    </Link>
                    <Link to="/">
                      <span>beverages3</span>
                    </Link>
                    <Link to="/">
                      <span>beverages4</span>
                    </Link>
                    <Link to="/">
                      <span>beverages5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Blog</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>post1</span>
                    </Link>
                    <Link to="/">
                      <span>post2</span>
                    </Link>
                    <Link to="/">
                      <span>post3</span>
                    </Link>
                    <Link to="/">
                      <span>post4</span>
                    </Link>
                    <Link to="/">
                      <span>post5</span>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Contact</Link>
                  <div className="subMenu shadow">
                    <Link to="/">
                      <span>contact us1</span>
                    </Link>
                    <Link to="/">
                      <span>contact us2</span>
                    </Link>
                    <Link to="/">
                      <span>contact us3</span>
                    </Link>
                    <Link to="/">
                      <span>contact us4</span>
                    </Link>
                    <Link to="/">
                      <span>contact us5</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
