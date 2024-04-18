import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './NavBar.css'
import { useState } from 'react';
const myNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className='navbar-wrapper'>
            <Navbar bg="light" expand="lg" className="justify-content-center">
                <Navbar.Brand href="/"><img className='logo' src='/Screenshot 2024-04-10 at 2.38.03 AM.png' />  </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title='=' id="basic-nav-dropdown" >
                            {/* <NavDropdown.Item href="/">Home</NavDropdown.Item> */}
                            <Button>
                            <NavDropdown.Item href="/messages">Message Board</NavDropdown.Item></Button>
                            <br></br>
                            <Button>
                            <NavDropdown.Item href="/messages/new">Post Message</NavDropdown.Item>  </Button>
                            <br></br>
                            <Button><NavDropdown.Item href="/messages/:id/edit">Edit Message</NavDropdown.Item>  </Button>

                        </NavDropdown>


                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default myNavbar;





