import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';


class Header extends React.Component{
    render(){
        return(
            <Navbar expand="lg" fixed="top">
           
                {/* <Container> */}
                <div className="col-3 px-5">
                <Link to="/"><img src="./img1.png"></img></Link>
                </div>
                    <div className="col-9">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                            <ul>
                                <CustomLink to="/about">About Us</CustomLink>
                                <CustomLink to="/courses">Courses</CustomLink>
                                <CustomLink to="/community">Community</CustomLink>
                                <CustomLink to="/pricing">Pricing</CustomLink>
                                <CustomLink to="/successstories">Success Stories</CustomLink>
                                <CustomLink to="/contact">Contact Us</CustomLink>
                                <CustomLink className="login" to ="/login">Login</CustomLink>
                            </ul>
             
                    </Navbar.Collapse>
                    </div>
                  
                {/* </Container> */}
            </Navbar>
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
