import React from 'react'
import { useSelector ,useDispatch} from "react-redux";
import Navigations from '../Navigation/Navigations';
import {InsertToCart,DeleteFromCart} from '../Redux/reducers/Actions'
const Cart = () => {
    const selct=useSelector((state) => state.ecom);
    const dispatch=useDispatch();
  return (
    <>
    <Navigations/>
    <div>
    <p>Cart</p>
    <p>Total Items in the Cart: {selct.totalItem}</p>
    </div>
     <div>
        {
            selct.CartItems.length>0?(
                
                selct.CartItems.map((ele,index)=>(
                    <div className='card2' key={index}>
                    <p>{ele.title}</p>
                    <img src={ele.image} alt='' style={{height:'100px',width:'100px'}}/>
                    <p>Price : ${ele.price}</p>
                     <p>rating {ele.rating.rate}/5</p>
                    <p>count {ele.rating.count}</p> 
                    {
                        selct.CartItems.includes(ele)?<button style={{backgroundColor:'red'}}
                        onClick={()=>dispatch(DeleteFromCart(ele))}
                        >Remove from Cart</button>:''
                    }
                    
                   </div>
                   
                ))
            ):<p>Your cart is empty</p>
        }
     </div>
    </>
  )
}

export default Cart
