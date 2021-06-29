import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitleBar from "views/TitleBar";
import BlogPosts from "./BlogPosts";

const Blog = () => {
  const breadcrump = [
    { title: "Home", path: "/home" },
    { title: "Blog", path: "/blog" },
    { title: "Blog Two Column With Right Sidebar" },
  ];

  return (
    <div className="content">
      <TitleBar title="Blog" breadcrump={breadcrump} />

      <Container className="content-container mt-3">
        <Row>
          <Col lg={9}>
            <BlogPosts className="main" />
          </Col>
          <Col lg={3}>
            <div className="sidebar mt-4">
              aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaa
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
