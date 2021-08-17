import React from 'react'
import { Image, Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../images/scotts_logo.svg';
import hamburger from '../images/hamburger.png';
import '../styles/Header.css';

function Header() {
    return (
        <Container className='container'>
            <Navbar expand="lg">
                <Navbar.Brand href='#home'>
                    <Image src={logo} className='logo' alt='logo' />
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    <Nav.Link href="#">Deals</Nav.Link>
                    <Nav.Link href="#">Plans</Nav.Link>
                    <Nav.Link href="#">Member Stories</Nav.Link>
                    <Nav.Link href="#">Guides</Nav.Link>
                    <Nav.Link href="#">Invite</Nav.Link>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown title={<Image src={hamburger} className='menu' alt='burger menu' />}>
                            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#">Departure Airports</NavDropdown.Item>
                            <NavDropdown.Item href="#">Notification Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#">Billing</NavDropdown.Item>
                            <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;
