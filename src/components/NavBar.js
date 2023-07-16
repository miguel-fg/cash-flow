import { React } from "react";

// bootstrap components
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavBar() {
    return (
        <Navbar expand="lg" variant="light">
            <Container fluid className="nav-container">
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
                        <Button>Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
