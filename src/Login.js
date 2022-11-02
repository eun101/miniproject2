// import React, { useState } from "react";
// import { Link, useResolvedPath, useMatch } from "react-router-dom";
// import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function Func() {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow} id="loginform">
//           Login
//         </Button>
  
//         <Modal show={show} onHide={handleClose} >
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" onClick={handleClose}>
//               Save Changes
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );
//   }
  

//   export default Login;