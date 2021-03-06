import React from "react";
import Card from "react-bootstrap/Card";

const SideCardTemplate = ({ title = "", children, className = "" }) => {
  return (
    <Card className={`mt-5 side-card-template ${className}`}>
      <Card.Title className="px-4 pt-4">{title}</Card.Title>
      <Card.Subtitle>
        <hr className="ml-4 mt-2" />
      </Card.Subtitle>
      {children}
    </Card>
  );
};

export default SideCardTemplate;
