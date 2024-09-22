import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Pages/Home';
import Header from './Components/Header/Header';
import axios from 'axios'

 const myContext=createContext();

function App() {

  const [countryList, setCountryList]=useState([]);

  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[])

  const getCountry=async(url)=>{
    const res=axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }
  // console.log(`thi is country list ₹{countryList}`)

  const values={
    countryList
  }

  return (
    <BrowserRouter>
    <myContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/search' exact={true} element={<Home/>}/>

    </Routes>
    </myContext.Provider>
    </BrowserRouter>
  )
}

export default App
export {myContext}