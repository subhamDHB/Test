import React from "react";
import Alert from "react-bootstrap/Alert";
import Forms from "./AddData/Forms";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const EditForm = ({
  showAlert,
  setBackGroundStyle,
  backgroungstyle,
  setshowAlert,
  EditData,
  setEditData,
  submitHandleForEdit,
}) => {
  function changing(e) {
    setEditData({
        ...EditData,
        [e.target.name]:e.target.value
    })
  }

  return (
    <>
      {showAlert ? (
        <Alert
          style={{
            width: "500px",
            height: "500px",
            display: "grid",
            marginTop: "10px",
            marginLeft: "40%",
            position: "absolute",
            zIndex: 1,
          }}
          variant="success"
          dismissible
          onClose={() => {
            setBackGroundStyle({
              ...backgroungstyle,
              opacity: 2,
            });
            setshowAlert(false);
          }}
        >
          <Alert.Heading>Type your Data</Alert.Heading>
          <p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={EditData.name}
                  onChange={changing}
                  //onChange={(e) => setName1(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="name"
                  name="email"
                  value={EditData.email}
                  onChange={changing}
                  //onChange={(e) => setEmail1(e.target.value)}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                onClick={(e) => submitHandleForEdit(e)}
              >
                Submit
              </Button>
            </Form>
          </p>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
};

export default EditForm;
