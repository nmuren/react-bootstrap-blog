import React from "react";
import Container from "react-bootstrap/Container";

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

      <Container className="content-container">
        <BlogPosts className="main" />
        <div className="sidebar">
          aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaa
        </div>
      </Container>
    </div>
  );
};

export default Blog;
