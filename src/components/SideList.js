import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { keyGenerator } from "utils/commonUtils";

const SideList = (props) => {
  const { title, items } = props;
  return (
    <Card className="mt-5">
      <Card.Title className="px-4 pt-4">{title}</Card.Title>
      <Card.Subtitle>
        <hr className="ml-4 mt-2" />
      </Card.Subtitle>
      <Card.Body className="pt-0">
        <ListGroup variant="flush">
          {items.map((item) => (
            <ListGroup.Item
              action
              className="space-between px-1"
              key={keyGenerator()}
            >
              <span className="black-text">{item.text}</span>
              <span className="text-muted">{item.count}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SideList;
