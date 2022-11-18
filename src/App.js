import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import AboutUs from './AboutUs';
import Courses from './Courses';
import Community from './Community';
import Pricing from './Pricing';
import SuccessStories from './SuccessStories';
import SignUp from './SignUp';
import Login from './Login';
import ContactUs from './ContactUs';
import Footer from './Footer';
import MainContent from './MainContent';
import { Fragment } from 'react';
import ScrollButton from './ScrollBtn';
import CourseDetails from './CourseDetails';
import Login2 from './Login2'
import SignUpForm from "./SignUpForm";
import CommunicatingCategory from "./CommunicatingCategory";
import Leadership from "./Leadership";
import CategoryProductivity from "./CategoryProductivity";
import CategoryCreativity from "./CategoryCreativity"
import CategoryPersonalDev from "./CategoryPersonalDev"
import Checkout from "./Checkout";






function App(){

  return (
    <>
    
    
    <div>
    <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element= {<AboutUs />} />
        <Route path="/courses/all" element= {<Courses />} />
        <Route path="/community" element= {<Community />} />
        <Route path="/pricing" element= {<Pricing />} />
        <Route path="/successstories" element= {<SuccessStories />} />
        <Route path="/login" element= {<Login2 />} />
        <Route path="/signup" element= {<SignUpForm />} />
        <Route path="/contactus" element= {<ContactUs />} />        
        <Route path="/coursedetail" element= {<CourseDetails />} />
        <Route path="/courses/category/personal-development" element= {<CategoryPersonalDev />} />
        <Route path="/courses/category/productivity-hacks" element= {<CategoryProductivity />} />
        <Route path="/courses/category/communicating" element= {<CommunicatingCategory />} />
        <Route path="/courses/category/leadership" element= {<Leadership />} />
        <Route path="/courses/category/creativity" element= {<CategoryCreativity />} />
        <Route path="/membership/checkout" element= {<Checkout />} />

        
      </Routes>
      <Header/>
      <Footer />
    </BrowserRouter>

 
      
      <ScrollButton />
    </Fragment>
    
    </div>
    </>
     
  
  );
}

export default App;