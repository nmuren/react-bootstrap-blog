import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => (
  <Container fluid>
    <div className="p-4 footer">
      <div>Copyright 2021 by Nebil. All Rights Reserved.</div>
      <div>
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript"
          width="30"
          height="30"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
          alt="react"
          width="30"
          height="30"
        />
        <img
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          alt="git"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
          alt="bootstrap"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
          alt="css3"
          width="30"
          height="30"
        />
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5"
          width="30"
          height="30"
        />
      </div>
    </div>
  </Container>
);
export default Footer;
