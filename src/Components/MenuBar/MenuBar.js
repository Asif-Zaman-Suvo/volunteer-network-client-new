import React from 'react';
import { Form,  Nav, Navbar,Button, Container } from 'react-bootstrap';
import logo from "../../logos/Group 1329.png"

const MenuBar = () => {
    return (
        <Container className='mt-3'>
            <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <img style={{width:'202.81px',height:'60px'}} src={logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#donation">Donation</Nav.Link>
                    <Nav.Link href="#events">Events</Nav.Link>
                     <Nav.Link href="#blog">Blog</Nav.Link>
                   
                </Nav>
                <Form inline>
                    
                    <Button variant="primary ml-5 mr-3">Register</Button>
                    <Button variant="dark">Admin</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    );
};

export default MenuBar;