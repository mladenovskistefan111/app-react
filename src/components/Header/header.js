import React from "react";
import { Link } from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap"
const header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: '#333', fontFamily: 'Arial, sans-serif' }}>
            <Navbar.Brand style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"20px"}} as={Link} to="/">BOOK LIBRARY 🖥️</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link style={{fontSize:"20px", fontFamily:"Roboto"}}
                        to="/books/add"
                        type="button"
                        className="btn btn-close-white"
                    >
                        Insert new book
                        <span className="align-content-center">

              </span>
                    </Link>
                    <Nav.Link as={Link} style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"18px"}} to="/categories">Categories 💡</Nav.Link>
                    <Nav.Link as={Link} style={{ color: '#FFFFFF',fontFamily:"Roboto",fontSize:"18  px"}} to="/books">Books 🕮</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default header;