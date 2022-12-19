import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector ,useDispatch} from "react-redux";
import Navigations from '../Navigation/Navigations';
import {DeleteFromCart} from '../Redux/reducers/Actions'
import CardGroup from 'react-bootstrap/CardGroup';
const Cart = () => {

    const CartItems=useSelector((state) => state.ecom);
    const dispatch=useDispatch();
    useEffect(()=>{
      console.log(CartItems)
    })
   function Prices(ele1){
    let element=CartItems.CartItems.find(ele=>ele.id===ele1.id)
    console.log(element)
    return element.Quantity*element.price
   }
  return (
    <>
    <Navigations/>
    <div>
    <p>Cart</p>
    <p>Total Items in the Cart: {CartItems.totalItem}</p>
    </div>
     <div style={{display:'flex',height:'400px'}}>
        {
            CartItems.CartItems.length>0?(
                
              CartItems.CartItems.map((ele,index)=>(
               ( ele['Quantity']>0)?(

                <CardGroup style={{width:'400px',display:'flex'}} key={ele.id}>
                <Card>
                  <Card.Img variant="top" src={ele.image} style={{height:'150px',width:'150px'}}/>
                  <Card.Body>
                    <Card.Title>{ele.title}</Card.Title>
                    <Card.Text>
                      Price : ${Prices(ele)}USD  
                    </Card.Text>
                    <Card.Text>
                    Quantity selected : {ele.Quantity}
                    </Card.Text>
                  </Card.Body>
                
                    {CartItems.CartItems.includes(ele) ? (
                      <Button variant="danger" onClick={()=>dispatch(DeleteFromCart(ele))}>Remove From Cart</Button>
                      ) : (
                        ""
                      )} 
                    
                   
                  
                </Card>
            
              </CardGroup>
               ):''))
            
            ):(
            <p>Your cart is empty</p>
            )
        }
     </div>
    </>
  )
}

export default Cart
