import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Course from './Course';
import Community from './Community';
import Pricing from './Pricing';
import SuccessStories from './SuccessStories';



import Footer from './Footer';


function App() {
  return (
    <div>
    <Header />
    {/* <Footer /> */}
    </div>
  );
}
  
export default App;