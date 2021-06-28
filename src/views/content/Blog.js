import React from "react";
import Container from "react-bootstrap/Container";

import TitleBar from "views/TitleBar";

const Blog = () => {
  return (
    <div className="content">
      <Container fluid className="p-0">
        <TitleBar title="Blog" />
      </Container>
      <Container>
        <h3>Blog</h3>
      </Container>
    </div>
  );
};

export default Blog;
