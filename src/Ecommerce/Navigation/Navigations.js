import React from 'react'
import './NavStyle.css'
import { useSelector } from "react-redux";

import { Outlet, Link } from "react-router-dom";
import HomePage from '../UI/HomePage';
const Navigations = () => {
const totalItem=useSelector((state) => state.ecom.totalItem);
  return (
    <>

    <nav>
      <ul >
      <li >
         <div style={{fontSize:'25px'}}><Link to="/">HomePage</Link></div> 
        </li>
        <li >
          <div style={{fontSize:'25px'}}><Link to="/data">Store</Link></div>
        </li>
        <li style={{float:'right'}}>
         <div style={{fontSize:'25px'}}><Link to="/cart">cart {totalItem}</Link></div> 
        </li>
      </ul>
    </nav>
  
    <Outlet />
   
  </>
  )
}

export default Navigations
