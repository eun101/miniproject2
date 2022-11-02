import React, { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



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
                                    <Func><CustomLink className="btn btn-primary">Login</CustomLink></Func>
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




function Func() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} id="loginform">
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!
          <div className="row">
                <div className="col">
                    <label>First Name:</label>
                    <input type="text" name="first_name" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Last Name:</label>
                    <input type="text" name="last_name" />
                </div>
            </div>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default Header;
