import React from 'react'
import Button from "react-bootstrap/Button";
const Tables = ({id,name,Email,Editdata,Deeletedata}) => {
  return (
    <tr key={id}>
    <td>{id}</td>
    <td>{name}</td>
    <td>{Email}</td>
    <td>
      <Button
        style={{ gap: "25px" }}
        variant="warning"
        onClick={() => Editdata(id)}
      >
        Edit
      </Button>
      <Button
        style={{ gap: "25px" }}
        variant="danger"
        onClick={() => Deeletedata(id)}
      >
        Delete
      </Button>
    </td>
  </tr>
  )
}

export default Tables
