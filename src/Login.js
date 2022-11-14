import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleOAuthProvider, GoogleLogin,  } from '@react-oauth/google';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"


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

  const login = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })

            console.log(res.data)
        } catch (err) {
            console.log(err)

        }

    }
});
    
    return (
      <>
         <button onClick={handleShow} id="signUpForm" className="btn">
          Login 
        </button>
  
        <Modal show={show} onHide={handleClose} className="modal-default">
          <button className="modal-close m-1" onClick={handleClose}> X
          </button>
          <Modal.Body className="mb-5">

            <div class="row signUp-modal">
                <div class="col-6 signup-image">
                    <img src="join-comm.png" />
                </div>
                <div class="col-6">
                        <div class="form-row">
                            
                            <h5>Join the Community For Free</h5>

                            <button onClick={login} className = "my-3">
                            <img src="https://img.icons8.com/color/48/null/google-logo.png" height="19px" className="googleicon" />
                             Continue with Google
                          </button>
                            {/* <GoogleOAuthProvider clientId="386413759697-r2obkbvia81u5ol60d1jjgiva56ktf21.apps.googleusercontent.com">
                              <GoogleLogin className = "google-login"
                              onSuccess={credentialResponse => {
                                  console.log(credentialResponse);
                              }}
                              onError={() => {
                                  console.log('Login Failed');
                              }}
                              />
                            </GoogleOAuthProvider> */}

                            <h6 className="m-1 mx-3 or">or </h6>

                        <form>
                            <div class="col my-2">
                                <input class="form-control" type="name" name="First_Name" placeholder="my@gmail.com" onClick={handleShow} />
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

        <Modal.Footer className="modal-footer">
        <div className="terms">
                            By signing up you agree to Excelente.'s Terms of Service and Privacy Policy. 
                          </div>

        </Modal.Footer>

        </Modal> 
      </>
    );
  }

  export default Login;


