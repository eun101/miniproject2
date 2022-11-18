import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleOAuthProvider, GoogleLogin,  } from '@react-oauth/google';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"


function SignUp() {
    const [show, setShow] = useState(false);

        
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputs, setInputs] = useState({
      id:0,
      version: 0,
});

    const [fieldName, setFieldName ] = useState ([]);
    

  const handleChange = (event) =>{
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFieldName(values=>({...values, [fieldName]: fieldValue}));
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
          SignUp 
        </button>
  
        <Modal show={show} onHide={handleClose} className="modal-lg">
          <button className="modal-close m-1" onClick={handleClose}> X
          </button>
          <Modal.Body className="mb-5">

            <div class="row signUp-modal">
                <div class="col-5 signup-image">
                    <img src="join-comm.png" />
                </div>
                <div class="col-7">
                        <div class="form-row">
                            
                            <h5>Join the Community For Free</h5>
                            <form onSubmit= {handleSubmit}>
                            <button onClick={login} className = "googlebutton my-3">
                            <img src="https://img.icons8.com/color/48/null/google-logo.png" height="30px" className="googleicon" />
                             Continue with Google
                            </button>
                            <div class="col">
                                <input type= "hidden" value= {fieldName.id} />
                            </div>
                        
                            <div class="col my-2">
                                <input class="form-control" type="name" name="first_name" placeholder="First Name" onChange={handleChange} value= {fieldName.first_name}/>
                            </div>
                            <div class="col my-2">
                                <input class="form-control" type="email" name="email_address" placeholder="Email Address" onChange={handleChange} value= {fieldName.first_name}/>
                            </div>
                            <div class="col my-2">
                                <input class="form-control" type="password" name="password" placeholder="********" onChange={handleChange} value= {fieldName.first_name}/>
                            </div>
                            <div class="col my-2">
                            <button className="btn-sign-to-google" onClick={handleSubmit}>Submit</button>
                            </div>
                            <a href="#">Forgot Password?</a>
                          
                        </form>

                        <div>
                        Already part of the community? <a href="#" >Log In</a>
                        </div>
                      
                        </div>
            </div>  
            </div>
          
                

            

        </Modal.Body>

        <Modal.Footer>
        <div className="terms">
                            By signing up you agree to Excelente.'s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. 
                          </div>
        </Modal.Footer>

   

        </Modal> 
      </>
    );
  }

  export default SignUp;


