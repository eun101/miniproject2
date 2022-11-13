import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


function Login() {
    const [show, setShow] = useState(false);

        
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputs, setInputs] = useState({
      id:0,
      version: 0,
  });

  const handleChange = (event) =>{
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setInputs(values=>({...values, [fieldName]: fieldValue}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputs(values=>({...values, version: inputs.version+1}));
  
  }
    
    return (
      <>
         <Button variant="primary" onClick={handleShow} id="signUpForm">
          SignUp 
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <button className="modal-close" onClick={handleClose}> X
          </button>
          <Modal.Body>

            <div class="row">
                <div class="col-6">
                    <img src="story1.png" className="img-fluid" />
                </div>
                <div class="col-6">
                        <div class="form-row">
                            
                            <h5>Join the Community For Free</h5>
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
                            <h6 className="m-3">or</h6>
                        <form>
                            <div class="col my-2">
                                <input class="form-control" type="name" name="First_Name" placeholder="my@gmail.com"  />
                            </div>
                            <div class="col my-2">
                                <input class="form-control" type="password" name="Email" placeholder="********" />
                            </div>
                            <div class="col my-2">
                            <a type="btn" class="btn" href="index.html">Submit</a>
                            </div>
                            <a href="#">Forgot Password?</a>
                        </form>
                            </div>
            </div>
            </div>
            {/* <div className="row m-2">
              <div className="col-6" id="sign-up-image">
              <img src = "story1.png" /> 
              </div>
            <div id="signUpForm">
              <div>or</div>
            

                  <div className="col-6">
                        <input type="text" name="" placeholder="First Name" onChange={handleChange}/>
                    </div>
                  <div className="col-6">
                        <input type="text" name="email" placeholder="Last Name" onChange={handleChange} />
                  </div>
              <div className="row m-2">
                  <div className="col-6">
                      <input type="email" name="email" placeholder="Email Address" onChange={handleChange}/>
                  </div>
                  <div className="col-6">
                      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                  </div>
              </div>
            </div>
          </div> */}
                

            

        </Modal.Body>

        </Modal> 
      </>
    );
  }

  export default Login;


