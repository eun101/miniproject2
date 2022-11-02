import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import AboutUs from './AboutUs';
import Course from './Course';
import Community from './Community';
import Pricing from './Pricing';
import SuccessStories from './SuccessStories';
import SignUp from './SignUp';
import Login from './Login';
import ContactUs from './ContactUs';
import Footer from './Footer';
import MainContent from './MainContent';



function App(){

  return (
    <div>
    <BrowserRouter>
      <Header/>
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element= {<AboutUs />} />
        <Route path="/courses" element= {<Course />} />
        <Route path="/community" element= {<Community />} />
        <Route path="/pricing" element= {<Pricing />} />
        <Route path="/successstories" element= {<SuccessStories />} />
      <Route path="/login" element= {<Login />} />
        <Route path="/contact" element= {<ContactUs />} />
      </Routes>
         <Footer />
    </BrowserRouter>
     
    </div>
  );
}

export default App;