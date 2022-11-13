import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

import PersonalDevCateg from "./PersonalDevCateg"

function CourseCategories(){


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
  
    return (
        <div className="container">

            hi there
 
            <ul>
                <CustomLink to = "/personal-development"> Personal Development</CustomLink>
                <CustomLink to ="/productivityhacks">Productivity Hacks</CustomLink>
                <CustomLink to ="/personalfinance">Personal Finance</CustomLink>
                <CustomLink to ="/communicating">Communicating</CustomLink>
                <CustomLink to ="/writing">Writing</CustomLink>
                <CustomLink to ="/leadership">Leadership</CustomLink>
                <CustomLink to ="/creativity">Creativity</CustomLink>

            </ul>
        
    
      </div>
    )
}


export default CourseCategories;