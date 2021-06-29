import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitleBar from "views/TitleBar";
import BlogPosts from "views/content/BlogPosts";
import SideBar from "views/SideBar";

const Blog = () => {
  const breadcrump = [
    { title: "Home", path: "/home" },
    { title: "Blog", path: "/blog" },
    { title: "Blog Two Column With Right Sidebar" },
  ];

  return (
    <div className="content">
      <TitleBar title="Blog" breadcrump={breadcrump} />
      <Container className="mt-3">
        <Row>
          <Col lg={9}>
            <BlogPosts className="main" />
          </Col>
          <Col lg={3} className="p-0">
            <SideBar className="sidebar mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
