import React from 'react';
import Form from 'react-bootstrap/Form';
const Forms = ({setaddnewData,addnewData}) => {
    function adding(e){
       
        setaddnewData({
            ...addnewData,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter Name" onChange={adding}/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name='email' placeholder="Enter Email" onChange={adding}/>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

    </Form>
    </div>
  )
}

export default Forms
