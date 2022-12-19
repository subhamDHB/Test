import React, { useEffect } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import { useSelector, useDispatch } from "react-redux";
import Navigations from "../Navigation/Navigations";
import { InsertToCart, DeleteFromCart } from "../Redux/reducers/Actions";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
const CardFile = ({ allData }) => {
  const data = useSelector((state) => state.ecom);
  const dispatch = useDispatch();
  const navic=useNavigate();
  return (
    <>
      <Navigations style={{position: 'fixed'}}/>

    {
      data.products.map((ele,index)=>(
      
      <CardGroup style={{width:'400px',display:'flex'}} key={ele.id}>
      <Card>
        <Card.Img variant="top" src={ele.image} style={{height:'150px',width:'150px'}}/>
        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text>
            Price : ${ele.price} USD
          </Card.Text>
        </Card.Body>
        <Button variant="success" onClick={()=>dispatch(InsertToCart(ele))}>Add To Cart</Button>
          {data.CartItems.includes(ele) ? (
            <Button variant="danger" onClick={()=>dispatch(DeleteFromCart(ele))}>Remove From Cart</Button>
            ) : (
              ""
            )} 
          
          <Button variant="primary" onClick={()=>navic(`/details/${ele.id}`)}>See Details</Button>
        
      </Card>
  
    </CardGroup>
      ))
    }
    </>
  );
};

export default CardFile;
