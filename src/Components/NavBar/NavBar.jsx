import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css'
const myNavbar = () => {
    return (
        <div className='navbar-wrapper'>
        <Navbar bg="light" expand="lg" className="justify-content-center">
            <Navbar.Brand href="/"> <h1>ParentConnect </h1></Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title='Messages' id="basic-nav-dropdown">
                    {/* <NavDropdown.Item href="/">Home</NavDropdown.Item> */}
                    <NavDropdown.Item href="/messages">Message Board</NavDropdown.Item>
                    <br></br>
                    <NavDropdown.Item href="/messages/new">Post Message</NavDropdown.Item>
                    <br></br>
                    <NavDropdown.Item href="/messages/:id/edit">Edit Message</NavDropdown.Item>

                    </NavDropdown>
                    
                    
                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default myNavbar;





