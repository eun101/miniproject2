import React, { useState, useEffect } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Login from './Login';




function PersonalDevCateg (){


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
  
        return(
            <div>
                        <div className="col-9">
                                <ul>
                                    <CustomLink to ="/courses/PersonalDevCateg"></CustomLink>
                                </ul>
                                
                
                        </div>
                </div>
             
        );
    }







export default PersonalDevCateg;
