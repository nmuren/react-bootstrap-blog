import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const ThumbnailPost = (props) => {
  const { item } = props;
  return (
    <Link to={item.url}>
      <Row className={props.className}>
        <Col>
          <img src={item.img} alt="post" width="80" height="80" />
        </Col>
        <Col>
          <h6 className="thumbnail-title">{item.title}</h6>
          <span className="italic-text text-muted">{item.date}</span>
        </Col>
      </Row>
    </Link>
  );
};

export default ThumbnailPost;
