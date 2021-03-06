import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { keyGenerator, responeStatusHandler } from "utils/commonUtils";
import SideCardTemplate from "components/SideCardTemplate";
import { getAllPosts } from "service/posts";
import ThumbnailPost from "components/ThumbnailPost";

const LatestPosts = ({ title = "", className = "" }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then(responeStatusHandler)
      .then((jsonData) => {
        const postData = jsonData.slice(-5).map((item) => {
          item.img = `/assets/img/dummy${
            Number.parseInt(Math.random() * 6) + 1
          }.jpg`;
          let [, month, day, year] = new Date().toDateString().split(" ");
          item.date = `${day} ${month}, ${year}`;
          item.url = `/post/${item.id}`;

          return item;
        });

        setData(postData);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <SideCardTemplate title={title} className={className}>
      <Card.Body className="pt-0 mt-2">
        {loading && data ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : data.length > 0 ? (
          data.map((item) => (
            <ThumbnailPost item={item} className="mb-3" key={keyGenerator()} />
          ))
        ) : (
          <span>No recent post...</span>
        )}
      </Card.Body>
    </SideCardTemplate>
  );
};

export default LatestPosts;
