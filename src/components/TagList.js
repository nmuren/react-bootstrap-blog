import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { keyGenerator } from "utils/commonUtils";
import SideCardTemplate from "components/SideCardTemplate";

const TagList = ({ title = "", items = [] }) => {
  return (
    <SideCardTemplate title={title}>
      <Card.Body className="pt-0 mt-2">
        {items.map((item) => (
          <Button
            variant="outline-secondary"
            className="m-1 p-2 green-button"
            key={keyGenerator()}
          >
            {item.text}
          </Button>
        ))}
        <Button variant="outline-secondary" className="m-1 p-2 green-button">
          ETC
        </Button>
      </Card.Body>
    </SideCardTemplate>
  );
};

export default TagList;
