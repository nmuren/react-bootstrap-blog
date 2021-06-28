import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "assets/logo.png";
import Menu from "nav/Menu";

const Header = () => (
  <Container fluid>
    <Row className="logo-row-border">
      <Col className="logo-container">
        <img src={logo} alt="logo" className="my-5" />
      </Col>
    </Row>
    <Row>
      <Menu />
    </Row>
  </Container>
);
export default Header;
