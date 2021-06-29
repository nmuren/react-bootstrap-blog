import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";

import { getAllPosts } from "service/posts";
import StyledCard from "components/StyledCard";
import { keyGenerator } from "utils/commonUtils";
import { getAllUsers } from "service/users";
import Pagination from "components/Pagination";

const POST_PER_PAGE = 12;

const BlogPosts = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [authors, setAuthors] = useState();
  const [pagedData, setPagedData] = useState([]);
  const [active, setActive] = useState(1);
  const filter = useLocation().pathname.split("/")[2];

  const onPaginationChange = (activePage) => {
    setActive(activePage);
  };

  useEffect(() => {
    if (data && active) {
      const startOrder = (active - 1) * POST_PER_PAGE;
      const endOrder = Math.min(startOrder + POST_PER_PAGE, data.length);
      const parsedData = data.slice(startOrder, endOrder);
      setPagedData(parsedData);
    }
  }, [data, active]);

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
          const postData = [];
          jsonData.forEach((item) => {
            if (
              !filter ||
              item.title.toLowerCase().includes(filter.toLowerCase())
            ) {
              item.img = `/assets/img/dummy${
                Number.parseInt(Math.random() * 6) + 1
              }.jpg`;
              let [, month, day, year] = new Date().toDateString().split(" ");
              item.date = `${day} ${month}, ${year}`;
              postData.push(item);
            }
          });
          setData(postData);
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
  }, [filter]);

  return (
    <div
      className={`${props.className} ${
        loading && pagedData ? "center-item mt-5" : ""
      }`}
    >
      {loading && pagedData ? (
        <Spinner animation="border" className="mt-4" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Row>
            {pagedData.length > 0 ? (
              pagedData.map((item, index) => (
                <Col key={keyGenerator()} className="mt-4" xl={6}>
                  <StyledCard
                    url={`/blog/post/${item.id}`}
                    img={item.img}
                    title={item.title}
                    author={authors ? authors.get(item.userId) : null}
                    date={item.date}
                    text={item.body}
                  />
                </Col>
              ))
            ) : (
              <Col>No data found...</Col>
            )}
          </Row>
          <Row className="my-4">
            <Col>
              <Pagination
                active={active}
                total={data.length}
                dataPerPage={POST_PER_PAGE}
                onChange={onPaginationChange}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default BlogPosts;
