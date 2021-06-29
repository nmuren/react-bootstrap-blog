import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import { keyGenerator } from "utils/commonUtils";
import SideCardTemplate from "components/SideCardTemplate";
import { getAllPosts } from "service/posts";
import ThumbnailPost from "components/ThumbnailPost";

const LatestPosts = (props) => {
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

    getAllPosts()
      .then(handleResponse)
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
    <SideCardTemplate title={props.title} className={props.className}>
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
