import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";

import SideCardTemplate from "components/SideCardTemplate";
import { getCommentsByPostId } from "service/comments";
import { keyGenerator, responeStatusHandler } from "utils/commonUtils";
import CommentCard from "components/CommentCard";

const Comments = (props) => {
  const { postId, dummyComment, activeId, setActiveId } = props;
  const [loading, setLoading] = useState(true);
  const [postComments, setPostComments] = useState([]);
  // const [activeId, setActiveId] = useState(0);

  const handleReply = (event) => {
    const newID = Number.parseInt(event.target.name);
    setActiveId(activeId === newID ? 0 : newID);
  };

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
          setPostComments([
            ...jsonData,
            ...dummyComment.filter((item) => item.parentId === 0),
          ]);
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
            <Card.Body className="pt-0 ">
              <ListGroup variant="flush">
                {postComments.map((item) => (
                  <React.Fragment key={keyGenerator()}>
                    <ListGroup.Item
                      className="space-between px-1 py-4  "
                      key={keyGenerator()}
                    >
                      <CommentCard
                        comment={item}
                        isActive={activeId === item.id}
                        onReply={handleReply}
                      />
                    </ListGroup.Item>
                    {dummyComment &&
                      dummyComment.map((child) => (
                        <React.Fragment key={keyGenerator()}>
                          {child.parentId === item.id && (
                            <ListGroup.Item
                              className="space-between px-1 py-4 ml-5 "
                              key={keyGenerator()}
                            >
                              <CommentCard
                                comment={child}
                                isActive={activeId === child.id}
                                onReply={handleReply}
                              />
                            </ListGroup.Item>
                          )}
                        </React.Fragment>
                      ))}
                  </React.Fragment>
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
