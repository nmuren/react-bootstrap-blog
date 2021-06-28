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
    prefix,
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
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item) => (
              <ItemGenerator item={item} prefix="" key={keyGenerator()} />
            ))}
            {/* <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ex2">
              <Nav.Link>Example2</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ex3">
              <Nav.Link>Example3</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
