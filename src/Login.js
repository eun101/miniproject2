import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


function Login() {
    const [show, setShow] = useState(false);

        
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    // function handleCallbackResponse(response) {
    //     console.log ("Encoded JWT ID token:" + response.credentials);

    // }
    // useEffect (() => {
    //     /* global google*/
    //     google.account.id.initialize({
    //         client_id: "386413759697-r2obkbvia81u5ol60d1jjgiva56ktf21.apps.googleusercontent.com",
    //         callback: handleCallbackResponse
    //     })

    //     google.account.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         { theme: "outline", size: "large"}
    //     )

    // }, []);




  
    return (
      <>
         <Button variant="primary" onClick={handleShow} id="loginform">
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <div id="signInDiv"></div> 
          
          <div className="m-3">or</div>
          <div className="row m-2">
                <div className="col">
                    <label>Email Address</label>
                    <input type="email" name="email" />
                </div>
            </div>
            <div className="row m-2">
                <div className="col">
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
            </div>

            <GoogleOAuthProvider clientId="386413759697-r2obkbvia81u5ol60d1jjgiva56ktf21.apps.googleusercontent.com">
                <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
            </GoogleOAuthProvider>

        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> 
      </>
    );
  }

  export default Login;







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