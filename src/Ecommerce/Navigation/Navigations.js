import React from 'react'

import { useSelector } from "react-redux";

import { Outlet, Link } from "react-router-dom";
const Navigations = () => {
const totalItem=useSelector((state) => state.ecom.totalItem);
  return (
    <>

    <nav>
      <ul style={{display:'flex',padding:'5px',gap:'30px',fontWeight:'bolder',color:'black'}}>
        <li style={{listStyle:'none'}}>
          <div style={{backgroundColor:'yellow',}}><Link to="/">Home</Link></div>
        </li>
        <li style={{listStyle:'none'}}>
         <div style={{backgroundColor:'yellow',}}><Link to="/cart">cart {totalItem}</Link></div> 
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default Navigations
