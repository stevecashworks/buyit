import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
type propType={
    errors:string[],
    modalOpen:boolean
    closeModal:React.Dispatch<React.SetStateAction<boolean>>
}
function ErrorsModal({errors, modalOpen, closeModal}:propType) {

  const handleClose = () => closeModal(false);


  return (
    <>
      

      <Modal show={modalOpen}  animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Fix the following errors to continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {errors.map(err=><p>{err}</p>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
                  </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorsModal;
