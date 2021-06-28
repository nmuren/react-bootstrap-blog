import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "assets/logo.png";
import Menu from "nav/Menu";

const Header = () => (
  <Container fluid>
    <Row className="logo-container">
      <Col>
        <img src={logo} alt="logo" className="mt-5 mb-4" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Menu />
      </Col>
    </Row>
  </Container>
);
export default Header;
