import React from 'react'
import { Image, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../images/scotts_logo.svg';
import '../styles/Header.css';

function Header() {
    return (
        <Container className='me-5'>
            <Navbar expand="lg">
                <Navbar.Brand href='#home'>
                    <Image src={logo} className='logo' alt='logo'/>
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href="#">Deals</Nav.Link>
                    <Nav.Link href="#">Plans</Nav.Link>
                    <Nav.Link href="#">Member Stories</Nav.Link>
                    <Nav.Link href="#">Guides</Nav.Link>
                    <Nav.Link href="#">Invite</Nav.Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                <Nav.Link href="#">Profile</Nav.Link>
                                <Nav.Link href="#">Departure Airports</Nav.Link>
                                <Nav.Link href="#">Notification Settings</Nav.Link>
                                <Nav.Link href="#">Billing</Nav.Link>
                                <Nav.Link href="#">Help Center</Nav.Link>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;
