import React from 'react';
import { Form, Nav, Navbar, Button, Container } from 'react-bootstrap';
import logo from "../../logos/Group 1329.png"
import './MenuBar.css';

const MenuBar = () => {
    return (
        <Container className=''>
            <Navbar collapseOnSelect expand="md" bg="transparent" variant="light">
                <Navbar.Brand href="#home">
                    <img className='logo' style={{ width: '202.81px', height: '60px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#donation">Donation</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>

                    </Nav>
                    <Form>
                        <Button variant="primary ml-5 mr-3">Register</Button>
                        <Button variant="dark">Admin</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </Container>
    );
};

export default MenuBar;



