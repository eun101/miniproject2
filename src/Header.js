import React, { useState, useEffect } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login'
import Login from './Login'



class Header extends React.Component{
    render(){
        return(
            <div>
                <Navbar expand="lg" fixed="top">
            
                    {/* <Container> */}
                    <div className="col-3 px-5">
                    <Link to="/"><img src="./img1.png"></img></Link>
                    </div>
                        <div className="col-9">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                                <ul>
                                    <CustomLink to ="/"></CustomLink>
                                    <CustomLink to="/about">About Us</CustomLink>
                                    <CustomLink to="/courses">Courses</CustomLink>
                                    <CustomLink to="/community">Community</CustomLink>
                                    <CustomLink to="/pricing">Pricing</CustomLink>
                                    <CustomLink to="/successstories">Success Stories</CustomLink>
                                    <CustomLink to="/contactus">Contact Us</CustomLink>
                                   <Login><CustomLink className="btn btn-primary">Login</CustomLink></Login>
                                </ul>
                                
                
                        </Navbar.Collapse>
                        </div>
                    
                    {/* </Container> */}
                </Navbar>
                </div>
             
        );
    }
}

function CustomLink({ to, children, ...props }){
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




export default Header;
