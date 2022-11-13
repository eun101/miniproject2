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
import CoursesTrial from './CoursesTrial';





function App(){

  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element= {<AboutUs />} />
        <Route path="/courses" element= {<Courses />} />
        <Route path="/community" element= {<Community />} />
        <Route path="/pricing" element= {<Pricing />} />
        <Route path="/successstories" element= {<SuccessStories />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/contact" element= {<ContactUs />} />
      </Routes>
      <Header/>
      <Footer />
    </BrowserRouter>
    
    </div>
    </>
     
  
  );
}

export default App;