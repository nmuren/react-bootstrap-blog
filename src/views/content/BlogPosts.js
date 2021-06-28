import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import { getAllPosts } from "service/posts";
import StyledCard from "components/StyledCard";

const BlogPosts = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        const { status } = res;
        if (status !== 200) {
          throw "Data call is unsuccessful!";
        } else {
          return res.json();
        }
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
        // body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        // id: 1
        // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        // userId: 1
      });
  }, []);

  return (
    <div>
      {loading && data ? (
        <Spinner animation="border" role="status" className={props.className}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        data.map((item) => (
          <StyledCard
            postId={item.id}
            img=""
            title={item.title}
            author={item.userId}
            date=""
            text={item.body}
          />
        ))
      )}
    </div>
  );
};

export default BlogPosts;
