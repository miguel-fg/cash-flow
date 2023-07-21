import { React } from "react";

// bootstrap components
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import AuthModal from "./auth/AuthModal";

export default function NavBar() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
        <Navbar expand="lg" variant="light">
            <Container fluid className="nav-container rounded">
                <LinkContainer to="/" className="nav-title-link">
                    <Navbar.Brand>Cash Flow</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end flex-grow-1 pe-2">
                        <LinkContainer to="/about" className="nav-link">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/pricing" className="nav-link">
                            <Nav.Link>Pricing</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/dashboard" className="nav-link">
                            <Nav.Link>Dashboard</Nav.Link>
                        </LinkContainer>
                        <Button onClick={handleShow}>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <AuthModal show={show} closeModal={handleClose} />
        </>
    );
}
