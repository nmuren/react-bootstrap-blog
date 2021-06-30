import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

import SideCardTemplate from "components/SideCardTemplate";
import { getCommentsByPostId } from "service/comments";
import { keyGenerator, responeStatusHandler } from "utils/commonUtils";
import CommentCard from "components/CommentCard";

const Comments = (props) => {
  const { postId, dummyComment } = props;
  const [loading, setLoading] = useState(true);
  const [postComments, setPostComments] = useState([]);

  useEffect(() => {
    if (postId) {
      getCommentsByPostId(postId)
        .then(responeStatusHandler)
        .then((jsonData) => {
          jsonData.forEach((item) => {
            item.img = `/assets/img/dummy${
              Number.parseInt(Math.random() * 6) + 1
            }.jpg`;
            let [, month, day, year] = new Date().toDateString().split(" ");
            item.date = `${day} ${month}, ${year}`;
          });
          setPostComments([...jsonData, ...dummyComment]);
          setLoading(false);
        })
        .catch(console.error);
    }
  }, [postId, dummyComment]);

  return (
    <>
      {loading || !postComments ? (
        <Spinner animation="border" className="mt-4" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <div className="recommendation">
          <SideCardTemplate
            title={`${postComments.length
              .toString()
              .padStart(2, "0")} COMMENTS`}
          >
            <Card.Body className="pt-0 mt-2">
              <ListGroup variant="flush">
                {postComments.map((item) => (
                  <ListGroup.Item
                    className="space-between px-1"
                    key={keyGenerator()}
                  >
                    <CommentCard comment={item} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </SideCardTemplate>
        </div>
      )}
    </>
  );
};

export default Comments;
