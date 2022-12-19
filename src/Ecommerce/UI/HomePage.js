import React from 'react'
import Navigations from '../Navigation/Navigations';
const HomePage = () => {
  return (
    <>
     <Navigations style={{zIndex:1,marginTop:"0px" }}/>
    <img style={{marginTop:"0px",top:"0px",zIndex:-1,width:'100%',height:'100vh',position:'absolute'}} src="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5e81df20e9c8e1585569568.png" alt='bck'/>
    <div style={{padding:'5px',backgroundColor:'orange',width:'600px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <p style={{ textAlign:'center',fontFamily:'cursive',fontSize:'40px'}}>Welcome to The Kuch Vi store</p>
    </div>
    </>
  )
}

export default HomePage
