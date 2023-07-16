import React from "react";

// bootstrap components
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CallToAction from "../components/CallToAction";
//import Image from 'react-bootstrap/Image';

export default function Home() {
    return (
        <Container className="main-container">
            <Row>
                <Col>
                    <h1 className="super-title">Take Control of Your Finances.</h1>
                    <h2 className="under-title">Discover a smarter way to manage your money and achieve your financial goals</h2>
                    <CallToAction name="Get Started" />
                </Col>
                <Col className="picture-placeholder">cool picture</Col>
            </Row>
        </Container>
    );
}