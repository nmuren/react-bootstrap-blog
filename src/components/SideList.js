import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { keyGenerator } from "utils/commonUtils";
import SideCardTemplate from "components/SideCardTemplate";

const SideList = (props) => {
  const { title, items } = props;
  return (
    <SideCardTemplate title={title}>
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
    </SideCardTemplate>
  );
};

export default SideList;
