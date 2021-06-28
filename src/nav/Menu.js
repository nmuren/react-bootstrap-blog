import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import topMenuItems from "nav/topMenuItems";
import { keyGenerator } from "utils/commonUtils";

const ItemGenerator = (props) => {
  const {
    item: { title, path, children },
    prefix = "",
  } = props;

  const linkPath = `${prefix}/${path}`;

  return (
    <>
      {children ? (
        <NavDropdown title={title}>
          {children.map((child) => (
            <ItemGenerator
              item={child}
              prefix={linkPath}
              key={keyGenerator()}
            />
          ))}
        </NavDropdown>
      ) : (
        <LinkContainer to={linkPath}>
          <Nav.Link active={false}>{title}</Nav.Link>
        </LinkContainer>
      )}
    </>
  );
};

const Menu = () => {
  const menuItems = topMenuItems() || [];

  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto top-navigation">
            {menuItems.map((item) => (
              <ItemGenerator item={item} key={keyGenerator()} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
