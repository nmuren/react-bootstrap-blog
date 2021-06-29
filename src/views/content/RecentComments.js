import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import { keyGenerator } from "utils/commonUtils";
import SideCardTemplate from "components/SideCardTemplate";
import { getAllComments } from "service/comments";

const RecentComments = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResponse = (res) => {
      const { status } = res;
      if (status !== 200) {
        new Error("Data call is unsuccessful!");
      } else {
        return res.json();
      }
    };

    getAllComments()
      .then(handleResponse)
      .then((jsonData) => {
        const postData = jsonData.slice(-5).map((item) => {
          item.img = `/assets/img/dummy${
            Number.parseInt(Math.random() * 6) + 1
          }.jpg`;
          let [, month, day, year] = new Date().toDateString().split(" ");
          item.date = `${day} ${month}, ${year}`;
          item.url = `/blog/post/${item.id}`;

          return item;
        });

        setData(postData);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <SideCardTemplate title={props.title} className={props.className}>
      <Card.Body className="pt-0">
        {loading && data ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : data.length > 0 ? (
          <ListGroup variant="flush">
            {data.map((item) => (
              <ListGroup.Item
                action
                className="hover-green px-1"
                key={keyGenerator()}
              >
                <Link to={`/blog/post/${item.postId}`}>
                  <span className="black-text">{item.email.split("@")[0]}</span>
                  <span className="text-muted"> on </span>
                  <span className="black-text">{item.name}</span>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <span>No recent post...</span>
        )}
      </Card.Body>
    </SideCardTemplate>
  );
};

export default RecentComments;
