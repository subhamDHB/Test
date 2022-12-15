import React from "react";
import Modal from "react-bootstrap/Modal";
import Forms from "./Forms";
import Button from "react-bootstrap/Button";

const AddDataForm = ({
  showmodal,
  addnewData,
  setaddnewData,
  setshowModal,
  AddData,
}) => {
  return (
    <>
      {showmodal ? (
        <div
          className="modal show"
          style={{ display: "block", zIndex: 1, position: "absolute" }}
        >
          <Modal.Dialog onClose={() => showmodal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Data</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Forms setaddnewData={setaddnewData} addnewData={addnewData} />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setshowModal(false)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => AddData(addnewData.name, addnewData.email)}
              >
                Save changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddDataForm;
