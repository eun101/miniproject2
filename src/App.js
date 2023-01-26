import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import AboutUs from './AboutUs';
import Courses from './Courses';
import Pricing from './Pricing';
import SuccessStories from './SuccessStories';
import ContactUs from './ContactUs';
import Footer from './Footer';
import MainContent from './MainContent';
import { Fragment } from 'react';
import ScrollButton from './ScrollBtn';
import CourseDetails from './CourseDetails';
import SignUpForm from "./SignUpForm";


function App(){

  return (
    <div>
    <Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element= {<AboutUs />} />
        <Route path="/courses/all" element= {<Courses />} />
        <Route path="/pricing" element= {<Pricing />} />
        <Route path="/successstories" element= {<SuccessStories />} />
        <Route path="/signup" element= {<SignUpForm />} />
        <Route path="/contactus" element= {<ContactUs />} />        
        <Route path="/coursedetail" element= {<CourseDetails />} />
      </Routes>
      <Header/>
      <Footer />
    </BrowserRouter>
      <ScrollButton />
    </Fragment>
    
    </div>
  
  );
}

export default App;