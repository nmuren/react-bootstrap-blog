import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import user from "assets/img/user-icon.png";
import calendar from "assets/img/calendar-icon.png";

const StyledCard = (props) => {
  const { url, img, title, author, date, text } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Link to={url}>
          <Card.Title className="mb-3">{title}</Card.Title>
        </Link>
        <Card.Subtitle className="mb-3 text-muted">
          <span className={author ? "" : "hidden-class"}>
            <img src={user} alt="author" width="16" height="16" />
            {author}
          </span>
          <span className={date ? "" : "hidden-class"}>
            <img src={calendar} alt="post date" width="16" height="16" />
            {date}
          </span>
        </Card.Subtitle>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StyledCard;
