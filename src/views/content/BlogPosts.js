import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { getAllPosts } from "service/posts";
import StyledCard from "components/StyledCard";
import { keyGenerator } from "utils/commonUtils";
import { getAllUsers } from "service/users";

const BlogPosts = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [authors, setAuthors] = useState();

  useEffect(() => {
    const handleResponse = (res) => {
      const { status } = res;
      if (status !== 200) {
        new Error("Data call is unsuccessful!");
      } else {
        return res.json();
      }
    };

    const postPromise = new Promise((resolve) => {
      getAllPosts()
        .then(handleResponse)
        .then((jsonData) => {
          jsonData.forEach((item) => {
            item.img = `/assets/img/dummy${
              Number.parseInt(Math.random() * 6) + 1
            }.jpg`;
            item.date = new Date().toDateString();
          });
          setData(jsonData);
          resolve();
        });
    });

    const authorPromise = new Promise((resolve) => {
      getAllUsers()
        .then(handleResponse)
        .then((jsonData) => {
          let authorMap = new Map();
          jsonData.forEach((item) => {
            authorMap.set(item.id, item.name);
          });
          setAuthors(authorMap);
          resolve();
        });
    });

    Promise.all([postPromise, authorPromise])
      .then(() => {
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={props.className}>
      {loading && data ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          {data.map((item, index) => (
            <Col key={keyGenerator()} className="mt-4" xl={6}>
              <StyledCard
                url={`/blog/${item.id}`}
                img={item.img}
                title={item.title}
                author={authors ? authors.get(item.userId) : null}
                date={item.date}
                text={item.body}
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default BlogPosts;
