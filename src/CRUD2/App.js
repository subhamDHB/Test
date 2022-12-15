import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Tableshow } from './Table/Tableshow';
import Alert from 'react-bootstrap/Alert'
import Forms from './AddData/Forms';

import Form from 'react-bootstrap/Form';

import axios from 'axios';
import Headings from './Headings';
import AddDataForm from './AddData/AddDataForm';
import EditForm from './EditForm';

const App = () => {
        let[serachbardata,setSerachbardata]=useState('');
        
        const [data,setData]=useState([]);
        
        let[details,setDetails]=useState({});
        
        const [addnewData,setaddnewData]=useState({
            name:'',
            email:'',
        });
        
        
        const [EditData,setEditData]=useState({
            name:details.name,
            email:details.email
        })
        
        
        const[showmodal,setshowModal]=useState(false);
        const[showAlert,setshowAlert]=useState(false);
        
        let [editId,seteditID]=useState();
      
        
        let [backgroungstyle,setBackGroundStyle]=useState({
            marginTop:0,
            zIndex:-1,
            opacity:2
        });
        
        
        const datafetch=async()=>{
            await fetch('https://639715ef77359127a02c3e89.mockapi.io/Fetch')
            .then(res=>res.json())
            .then(result=>{
                setData(result);
                console.log(data)
            });
        }
        
        
        const AddData=async(user,email)=>{
            setshowModal(false);
            await fetch('https://639715ef77359127a02c3e89.mockapi.io/Fetch',{
                method:'POST',
                body:JSON.stringify({
                    
                    name:user,
                    Email:email,
                
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(res=> res.json())
            .then(result=>{
                setData(prev=>[...prev,result])
            })
        }
        
        
        
        function submithandler(e){
            e.preventDefault();
            AddData(addnewData.name,addnewData.email);
            
        }
    
        useEffect(()=>{   
                datafetch();
        },[]);
  
       

        useEffect(()=>{

            setEditData({
                name:details.name,
                email:details.Email,
            })
           
            
        },[details])
        
        
        
        async function submitHandleForEdit(e){
            e.preventDefault();
            console.log(details);
        
            setshowAlert(false);
            setBackGroundStyle({
                ...backgroungstyle,'opacity':2,
              });
        
            axios.put(`https://639715ef77359127a02c3e89.mockapi.io/Fetch/${editId}`, {
                Email: EditData.name,
                name: EditData.email,
              })
              .then(function (response) {
                console.log(response);
                console.log(EditData)
                setData((e)=>[...e,response])
              })
              .then(()=>datafetch())
              .catch(function (error) {
                console.log(error);
              });
              
        }
  
    
    return (
    <>
    
    <Headings setshowModal={setshowModal} 
    setSerachbardata={setSerachbardata} 
    data={data}/>


    <EditForm submitHandleForEdit={submitHandleForEdit}
    showAlert={showAlert}
    setBackGroundStyle={setBackGroundStyle}
    backgroungstyle={backgroungstyle}
    setshowAlert={setshowAlert}
    EditData={EditData}
    setEditData={setEditData}
    />
    
    
    
    <AddDataForm showmodal={showmodal} 
    setaddnewData={setaddnewData} 
    setshowModal={setshowModal} 
    AddData={AddData} 
    addnewData={addnewData} />
    
     
     
     <Tableshow data={data} setData={setData} setshowAlert={setshowAlert} seteditID={seteditID} setDetails={setDetails}
     backgroungstyle={backgroungstyle} setBackGroundStyle={setBackGroundStyle} serachbardata={serachbardata}/>
    </>
  )
}

export default App
