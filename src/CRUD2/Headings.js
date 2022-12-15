import React, { useState } from 'react'
import Badge from 'react-bootstrap/esm/Badge';
import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
const Headings = ({data,setshowModal,setSerachbardata}) => {
    
    
  return (

    <>

    
      <div style={{display:'flex',justifyContent:'space-between',borderRadius:'5px 10px'}} >
        
        
        
        <Badge onClick={()=>setshowModal(true)} style={{width:'200px',height:'50px',cursor:'pointer',alignItems:'center',display:'flex',justifyContent:'center'}} bg="secondary">Click to add new data</Badge>
        
     
    
      

      <DatalistInput style={{width:'400px',borderRadius:'1px solid black'}}
    
        label="Select"
         onSelect={(e) => setSerachbardata(String(e.value))}
         id

         items={data.map(e=>({ id: e.id, value: e.name, description: e.name}))}
         onChange={(e)=>setSerachbardata(e.target.value)}
        />

        </div>
    </>
  )
}

export default Headings