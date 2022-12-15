import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchData} from './Redux/reducers/Actions';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardFile from "./Components/CardFile";
import Cart from "./Components/Cart";
import "./style.css";

const App = () => {

  const dispatch = useDispatch();
  const newstate = useSelector((state) => state.ecom);
  console.log()

  useEffect(() => {
    console.log(newstate)
    dispatch(fetchData());

  },[]);

  return (
    <>
    <BrowserRouter>
      <Routes>
        
        <Route exact path="/" element={<CardFile allData={newstate}/>}/>
        <Route exact path="/cart" element={<Cart TotalItem={newstate.totalItem}/>} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
