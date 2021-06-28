import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { keyGenerator } from "utils/commonUtils";

const breadcrumpGenerator = (breadcrump = []) => {
  const JSX = [];
  for (let index = 0; index < breadcrump.length; index++) {
    const { title, path } = breadcrump[index];
    const isLast = index + 1 === breadcrump.length;
    JSX.push(
      <span key={keyGenerator()}>
        {isLast ? (
          <span className="current">{title}</span>
        ) : (
          <>
            <Link to={path}>{title}</Link>
            <span className="mx-3">/</span>
          </>
        )}
      </span>
    );
  }

  return JSX;
};

const TitleBar = (props) => {
  const { breadcrump = [], title } = props;

  return (
    <Container fluid className="p-0 titleBar">
      <Container>
        <h3>{title}</h3>
        <div className="custom-breadcrump mt-3">
          {breadcrumpGenerator(breadcrump).map((Item) => Item)}
        </div>
      </Container>
    </Container>
  );
};

export default TitleBar;
