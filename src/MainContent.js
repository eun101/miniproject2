import React, {useState, useEffect} from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import herobanner from './herobanner.png';
import SignUp from './SignUp';
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import Login from './Login';
import vid1 from './vid1.mp4';
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios";
import TopBanner from "./TopBanner";
import CourseCarousel from "./CourseCarousel";


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

    const [inputs, setInputs] = useState({
        id:0,
        version: 0,
    });
  
  
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
        <TopBanner />
        <section className="heroBanner" style = {{backgroundImage: `url(${herobanner})`}}  >
            <div className="container-fluid">
                <div className="row mainbanner row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2  ">
                    <div className=" col titlewrapper">
                    <h1>Building a community of confident, <br/>productive and collaborative individuals.</h1>
                    <h2>Join Excelente. community for FREE</h2>
                        <div className="eform my-4">
                            <div class="row signUp-modal">
                                <div class="form-row">
                                    <button onClick={login} className = "googlebutton-banner my-3">
                                    <img src="https://img.icons8.com/color/48/null/google-logo.png" height="30px" className="googleicon" />
                                        Continue with Google
                                    </button>
                                     <div className="mb-3">
                                        ⸺⸺⸺⸺ OR ⸺⸺⸺⸺
                                        </div>
                                    <div className="mb-4 heroBanner-signup-email">
                                    <Link to ="/signup" >Sign Up with Email</Link>
                                    </div>
                                    <div>
                                    Already part of the community? <Link to ="/login" >Log In</Link>
                                    </div>
                                    <div className="terms">
                                        By signing up you agree to Excelente.'s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. 
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                    <div className="col promovideo">                
                        <video autoPlay muted loop width="560" height="410" controls >
                        <source src={vid1} type="video/mp4"/>
                        </video>
                    </div>
               </div>
            </div>
        </section>

     
        

            <section className="why-excelente-main mt-5">
            <h2> Why Excelente. Works</h2>
            <div className="why-excelente-content">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3">
                        <div className="col">
                            <div className="why-excelente-body">
                            <img src="./we1.png" alt="why excelente" className="mb-1"/>
                            <h3>Collaborative</h3>
                            </div>
                        </div>
                        <div className="col">
                        <div className="why-excelente-body">
                            <img src="./we2.png" alt="why excelente" className="mb-1"/>
                            <h3>Learn Anywhere</h3>
                        </div>
                        </div>
                        <div className="col">
                        <div className="why-excelente-body">
                            <img src="./we3.png" alt="why excelente" className="mb-1"/>
                            <h3>Connect with people who aspire for excellence </h3>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>


    


           <section className="course-category">
             <div className="container-fluid">
                         <CourseCarousel />
             </div>
         </section>



        <section>
           <div class="container joincommunity">
            <div class="row row-col-sm-8">
              <div class="col-8 sidebar">
                 <div className="row joincommunity-img1">
                     <div className="col-6 py-4">
                         <img src="./JoinCommunity1.png" alt="why excelente" />
                     </div>
                    <div className="col-6 py-4">
                         <img src="./JoinCommunity2.png" alt="why excelente" />
                     </div>
                     </div>
                         <div className="row joincommunity-img2">
                     <div className="col-6 py-4">
                         <img src="./JoinCommunity2.png" alt="why excelente" />
                     </div>
                    <div className="col-6 py-4">
                        <img src="./JoinCommunity3.png" alt="why excelente" />
                    </div>
                     </div>
                 </div>
           
               <div class="col-4 mt-5">
                 <div className="col join-community-caption">
                         <h4> Connect with like-minded people from all around the world</h4>
                        <div className="my-4">
                         <span><SignUp /></span>
                       </div>
                </div>
                </div>
            </div>
          </div>
         </section>
     </>

           );
           }

                
export default MainContent;