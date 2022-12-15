import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Tables from "./Tables";

export function Tableshow({
  data,
  setData,
  setshowAlert,
  seteditID,
  setDetails,
  backgroungstyle,
  setBackGroundStyle,
  serachbardata,
}) {
  function Deeletedata(id) {
    let newdata = data.filter((ele) => ele.id !== id);
    setData(newdata);
  }
  function Editdata(id1) {
    let newdata = data.find((ele) => ele.id == id1);
    setDetails(newdata);
    setshowAlert(true);
    setBackGroundStyle({
      ...backgroungstyle,
      opacity: 0.5,
    });
    seteditID(id1);
  }
  useEffect(() => console.log(typeof serachbardata), [serachbardata]);

  return (
    <div style={backgroungstyle}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email Name</th>
            <th>Actios</th>
          </tr>
        </thead>
        <tbody>
          {serachbardata.length > 0
            ? data
                .filter((ele) => ele.name.includes(serachbardata))
                .map(({ id, name, Email }) => (
                  <Tables id={id} name={name} Email={Email} Editdata={Editdata} Deeletedata={Deeletedata}/>
                ))
            : data.map(({ name, Email, id }) => (
                  <Tables id={id} name={name} Email={Email} Editdata={Editdata} Deeletedata={Deeletedata}/>
              ))}
        </tbody>
      </Table>
    </div>
  );
}
