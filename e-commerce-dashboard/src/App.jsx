import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";
import Signup from "./Components/signup/Signup";
import Login from "./Components/login/Login";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const myContext = createContext();

function App() {
  const [isRegistered, setIsRegistered] = useState(false); // Registration state
  const [countryList, setCountryList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const dollerToRupees = 61.06;

  const location = useLocation();

  useEffect(() => {
    // This could be a real check for a token, cookie, or localStorage value
    const userRegistered = localStorage.getItem("isRegistered");
    setIsRegistered(!!userRegistered);
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url) => {
    const res = axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  const values = {
    countryList,
    cartItems,
    setCartItems,
    dollerToRupees,
  };

  // Conditionally render Header based on the current route
  const showHeader = location.pathname !== "/login" && location.pathname !== "/signup";

  // If the user is not registered, redirect to the signup page
  if (!isRegistered && location.pathname !== "/signup") {
    return <Navigate to="/signup" />;
  }

  return (
    <myContext.Provider value={values}>
      <ToastContainer />
      {showHeader && <Header cartItems={cartItems} />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </myContext.Provider>
  );
}

export default App;
export { myContext };
