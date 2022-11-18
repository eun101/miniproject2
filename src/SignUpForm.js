import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GoogleOAuthProvider, GoogleLogin,  } from '@react-oauth/google';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"


function SignUpForm() {
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
    <section>

   <div className="container">
     <div className="row m-2">
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
</div> 
</div>
</section>


    );
  }



  export default SignUpForm;


