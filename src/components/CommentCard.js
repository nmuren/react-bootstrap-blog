import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import blackArrow from "assets/img/curved-arrow-icon.png";
import greenArrow from "assets/img/curved-arrow-alternative-icon.png";

const CommentCard = ({ comment = {}, isActive, onReply, className = "" }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <Row className={className}>
      <Col className="thumbnail-img">
        <img src={comment.img} alt="post" width="80" height="80" />
      </Col>
      <Col className="ml-3">
        <Row>
          <Col className="inline-header">
            <h5 className="comment-title">
              {comment.email.split("@")[0].replace("_", " ").replace(".", " ")}
            </h5>
            <span className="muted-date">-</span>
            <span className="muted-date">{comment.date}</span>
          </Col>
        </Row>
        <Row>
          <Col className="mt-2">
            <p className="text-muted">{comment.body}</p>
            <button
              type="button"
              name={comment.id}
              className={`reply-button ${isActive ? "reply-active" : ""}`}
              onClick={onReply}
              onMouseEnter={() => setOnHover(true)}
              onMouseLeave={() => setOnHover(false)}
            >
              <img
                src={isActive || onHover ? greenArrow : blackArrow}
                className="mr-2"
                alt="reply"
                width="20"
                height="20"
              />
              Reply
            </button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CommentCard;
