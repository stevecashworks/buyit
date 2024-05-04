
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { linkStyle } from "../Register/register";
type propType={
    open:boolean,
    toggle:React.Dispatch<React.SetStateAction<boolean>>, 
    message:string
    
}
function PopUp({open,toggle, message}:propType) {
  

  const handleClose = () => toggle(false);
  

  return (
    <>
      <Modal
        show={open}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Vendor Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">
            <Link style={linkStyle} to="/vendor">Yes please</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp;
