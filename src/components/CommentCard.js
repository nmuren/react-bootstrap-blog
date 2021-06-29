import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentCard = (props) => {
  const { comment } = props;

  return (
    <Row className={props.className}>
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
            <span className="text-muted">{comment.body}</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CommentCard;
