import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import herobanner from './herobanner.png';
import SignUp from './SignUp';
import ImageSlider from "./ImageSlider";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import Login from './Login';
import McCourses from './McCourses';
import vid1 from './vid1.mp4';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"


function MainContent() {


    const slides = [
        { url: "./story1.png", title: "beach" },
        { url: "story2.png", title: "boat" },
        { url: "story3.png", title: "forest" },
        { url: "story4.png", title: "forest" },
    
      ];
      const containerStyles = {
        width: "1320px",
        height: "600px",
        margin: "0 auto",
      };


      const CustomLink = ({ to, children, ...props }) => { 
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname})
        
        return (
            <li className= {isActive ? "active" : ""}>
                <Link to={to} {...props}>
                {children}
                </Link>
            </li>
        )
        
    }

    // const [employees, setEmployees] = useState([]);
    // useEffect(() =>{
    //     fetch('http://localhost:9000/employees')
    //     .then(response => response.json())
    //     .then(data => {
    //         setEmployees(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //     });
    // },[]);

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
        <section className="heroBanner" style = {{backgroundImage: `url(${herobanner})`}}  >
            <div className="container-fluid">
                <div className="row mainbanner row-cols-12 row-cols-sm-12 row-cols-md-12 ">
                    <div className=" col-6 titlewrapper">
                    <h1>Building a confident, productive and collaborative community.</h1>
                    <h2>Join Excelente. community for FREE</h2>
                        <div className="eform my-4">
                        <div class="row signUp-modal">
                            <div class="form-row">
                                

                                <button onClick={login} className = "googlebutton-banner my-3">
                                <img src="https://img.icons8.com/color/48/null/google-logo.png" height="30px" className="googleicon" />
                                Continue with Google
                                </button>

                            <div>
                            Already part of the community? <a href="#" >Log In</a>
                            </div>

                            <div className="terms">
                                By signing up you agree to Excelente.'s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. 
                            </div>
                        
                                </div>
                        </div>
                    </div>
                            </div>
                    <div className="col-6 promovideo">                
                    {/* <iframe src="https://www.youtube.com/embed/DC7Y6sC7Ae4" 
                     frameborder="0" 
                    allow="accelerometer; autoplay;" 
                    allowfullscreen /> */}

                <video width="570" height="490" controls >
                    <source src={vid1} type="video/mp4"/>
                    </video>
                </div>
               </div>
            </div>
        </section>

     
        

            <section className="why-excelente-main my-5">
            <h2> How Excelente. Works</h2>
            <div className="why-excelente-content">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                        <div className="col">
                            <div className="why-excelente-body">
                            <img src="./we1.png" alt="why excelente" className="mb-3"/>
                            <h3>Collaborative</h3>
                            </div>
                        </div>
                        <div className="col">
                        <div className="why-excelente-body">
                            <img src="./we2.png" alt="why excelente" className="mb-3"/>
                            <h3>Learn Anywhere</h3>
                        </div>
                        </div>
                        <div className="col">
                        <div className="why-excelente-body">
                            <img src="./we3.png" alt="why excelente" className="mb-3"/>
                            <h3>Connect with people who aspire for excellence </h3>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>


         

            <section className="courses">
                <div className ="row">
                    <div className="col">
                        <h2>Courses</h2>
                        <ul>
                            {/* <div>Name : {employee.name}</div> */}
                            {/* <CustomLink to="/about">About Us</CustomLink>
                            <CustomLink to="/courses">Courses</CustomLink>
                            <CustomLink to="/community">Community</CustomLink>
                            <CustomLink to="/pricing">Pricing</CustomLink>
                            <CustomLink to="/successstories">Success Stories</CustomLink>
                            <CustomLink to="/contactus">Contact Us</CustomLink>
                            <Login><CustomLink className="btn">Login</CustomLink></Login> */}
                        </ul>

                        <McCourses />
                        
                    </div>
                </div>
            </section>




            <section className="success-stories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h2>Success Stories</h2>
                            <div className="success-stories-content">
                            <div style={containerStyles}>
                                <ImageSlider slides={slides} />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="join-the-community main my-5">
            <div className="joincommunity container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                        <div className="col-3 py-4">
                            <img src="./JoinCommunity1.png" alt="why excelente" />
                        </div>
                        <div className="col-3 py-4">
                            <img src="./JoinCommunity2.png" alt="why excelente" />
                        </div>
                        <div className="col-3 join-community-title my-5">
                            <h2> Join the Community</h2>
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                        <div className="col-3 py-4">
                            <img src="./joincommunity2.png" alt="why excelente" />
                        </div>
                        <div className="col-3 py-4">
                            <img src="./joincommunity3.png" alt="why excelente" />
                        </div>
                        <div className="col-3 join-community-caption">
                        
                            <p> Connect with like-minded people from all around the world</p>
                            <span><SignUp /></span>
                        </div>
                    </div>
                   
                   
            </div>
            </section>
           


    </>

                );
                }

                
export default MainContent;