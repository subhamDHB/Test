import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Navigations from '../Navigation/Navigations';
import {InsertToCart,DeleteFromCart} from '../Redux/reducers/Actions'
const CardFile = ({allData}) => {
 const data = useSelector((state) => state.ecom);
 const dispatch=useDispatch();
 useEffect(()=>{
  console.log(allData)  
 })
  return (
    <div>
        <Navigations/>
      <div className='card1'>
      
           {
            allData.products.map((ele,index)=>(
                <div className='card2' key={index}>
                <p>{ele.title}</p>
                <img src={ele.image} alt= '' style={{height:'100px',width:'100px'}}/>
                <p>Price : ${ele.price}</p>
                <p>rating {ele.rating.rate}/5</p>
                 <p>count {ele.rating.count}</p>
                <button style={{backgroundColor:'green'}} onClick={()=>dispatch(InsertToCart(ele))}>Add to Cart</button>
                {
                    data.CartItems.includes(ele)?<button style={{backgroundColor:'red'}}
                    onClick={()=>dispatch(DeleteFromCart(ele))}
                    >Remove from Cart</button>:''
                }
                
               </div>
               
            ))
           }
    </div>
    </div>
  )
}

export default CardFile

