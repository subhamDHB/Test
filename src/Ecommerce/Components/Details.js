import React, { useEffect, useState } from "react";
import Navigations from "../Navigation/Navigations";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export const Details = () => {
    const data = useSelector((state) => state.ecom);
    const {id} = useParams();
    const navic=useNavigate();
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        let data1=data.products.filter(ele=>ele.id===1);
        console.log(id);
        setDetails(data1)
    },[])
    useEffect(()=>console.log(details),[])
  return (
    <div>
      <Navigations />
 {     details.map((ele,index)=>(
        <Card className="text-center" key={ele.id}>
        <Card.Img variant="top" src={ele.image} style={{height:'150px',width:'150px'}}/>
        <Card.Header>{ele.title}</Card.Header>
        <Card.Body>
          <Card.Title>Price {ele.price}</Card.Title>
          <Card.Title>Rating {ele.rating.rate}/5</Card.Title><span>from</span><p>{ele.rating.count} people</p>
          <Card.Text>
            Description : {ele.description}
          </Card.Text>
          <Card.Text>
            Category : {ele.category}
          </Card.Text>
          <Button variant="primary" onClick={()=>navic('/data')}>Go to Store</Button>
        </Card.Body>
  
      </Card>
      ))}
    
    </div>
  );
};
