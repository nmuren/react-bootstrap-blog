import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import SideCardTemplate from "components/SideCardTemplate";

const Newsletter = ({ title = "" }) => {
  return (
    <SideCardTemplate title={title} className="letter-border">
      <Card.Body className="pt-0 mt-2">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Form.Group>
            <Form.Control type="text" placeholder="Full Name" required />
          </Form.Group>

          <Form.Group>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Button
            type="submit"
            variant="outline-secondary"
            className="pt-2 px-4 green-button submit-style"
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </SideCardTemplate>
  );
};

export default Newsletter;
