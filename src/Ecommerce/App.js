import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchData} from './Redux/reducers/Actions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardFile from "./Components/CardFile";
import Cart from "./Components/Cart";
import "./style.css";
import HomePage from "./UI/HomePage";
import { Details } from "./Components/Details";

const App = () => {

  const dispatch = useDispatch();
  const newstate = useSelector((state) => state.ecom);

  useEffect(() => {
    console.log(newstate)
    dispatch(fetchData());

  },[]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/Data" element={<CardFile allData={newstate}/>}/>
        <Route exact path="/cart" element={<Cart TotalItem={newstate.totalItem}/>} />
        <Route exact path="/details/:id" element={<Details/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
