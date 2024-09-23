import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Pages/Cart";

const myContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const res = axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  // console.log(`thi is country list ₹{countryList}`)

  const values = {
    countryList,
    cartItems,
    setCartItems,
  };

  return (
    <BrowserRouter>
      <myContext.Provider value={values}>
        <ToastContainer />

        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/search" exact={true} element={<Home />} />
          <Route path="/cart" exact={true} element={<Cart />} cartItems={cartItems} setCartItems={setCartItems}/>

        </Routes>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { myContext };
