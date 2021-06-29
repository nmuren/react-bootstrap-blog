import React from "react";
import Card from "react-bootstrap/Card";

const SideCardTemplate = (props) => {
  const { title, children } = props;
  return (
    <Card className={`mt-5 side-card-template ${props.className || ""}`}>
      <Card.Title className="px-4 pt-4">{title}</Card.Title>
      <Card.Subtitle>
        <hr className="ml-4 mt-2" />
      </Card.Subtitle>
      {children}
    </Card>
  );
};

export default SideCardTemplate;
