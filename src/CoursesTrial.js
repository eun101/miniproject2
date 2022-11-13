import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import CourseCategories from "./CourseCategories";
import MainContent from "./MainContent";

import PersonalDevCateg from "./PersonalDevCateg"

function CoursesTrial(){


  
    return (
        <div className="container">

            hi there
            
                    <Route path="/personal-development" element={<MainContent />} />
    

{/* 
                <CourseCategories /> */}
           
        
    
      </div>
    )
}


export default CoursesTrial;