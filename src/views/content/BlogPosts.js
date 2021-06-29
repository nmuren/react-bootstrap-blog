import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { getAllPosts } from "service/posts";
import StyledCard from "components/StyledCard";
import { keyGenerator } from "utils/commonUtils";
import { getAllUsers } from "service/users";
import Pagination from "components/Pagination";

const POST_PER_PAGE = 2;

const BlogPosts = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [authors, setAuthors] = useState();
  const [pagedData, setPagedData] = useState([]);
  const [active, setActive] = useState(1);

  const onPaginationChange = (activePage) => {
    setActive(activePage);
  };

  useEffect(() => {
    if (data && active) {
      const startOrder = (active - 1) * POST_PER_PAGE;
      const endOrder = Math.min(startOrder + POST_PER_PAGE, data.length);
      console.log(
        "🚀 ~ file: BlogPosts.js ~ line 27 ~ useEffect ~ startOrder",
        startOrder,
        startOrder + POST_PER_PAGE,
        data.length,
        endOrder
      );
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
          jsonData.forEach((item) => {
            item.img = `/assets/img/dummy${
              Number.parseInt(Math.random() * 6) + 1
            }.jpg`;
            let [, month, day, year] = new Date().toDateString().split(" ");
            item.date = `${day} ${month}, ${year}`;
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
      {loading && pagedData ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <Row>
            {pagedData.map((item, index) => (
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
          <Row>
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
