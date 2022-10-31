import React from "react";
import { Link } from "react-router-dom";



class Header extends React.Component{
    render(){
        return(
            <nav className="header">
                <div className ="container">
                    <div className="row">
                        <div className="col-3 col-sm-3">
                        <img src="./img1.png"></img>
                        </div>
                        <div className="col-9 col-sm-9">
                            <ul>
                                <CustomLink to="/aboutus">About Us</CustomLink>
                                <CustomLink to="/courses">Courses</CustomLink>
                                <CustomLink to="/community">Community</CustomLink>
                                <CustomLink href="/pricing">Pricing</CustomLink>
                                <CustomLink href="/successstories">Success Stories</CustomLink>
                                <CustomLink href="/contactus">Contact Us</CustomLink>
                                <CustomLink href ="/login">Login</CustomLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

function CustomLink({ to, children, ...props }){
    const path = window.location.pathname
    return (
        <li className= {path === to ? "active" : ""}>
            <a href={to} {...props}>
            {children}
            </a>
        </li>
    )
}

export default Header;