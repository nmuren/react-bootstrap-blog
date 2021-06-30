import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SideCardTemplate from "components/SideCardTemplate";
import { keyGenerator } from "utils/commonUtils";

const Comments = (props) => {
  const { callback, parentId } = props;
  const [name, setName] = useState({ value: "", status: -1 });
  const [email, setEmail] = useState({ value: "", status: -1 });
  const [website, setWebsite] = useState({ value: "", status: -1 });
  const [comment, setComment] = useState({ value: "", status: -1 });
  const [success, setSuccess] = useState(false);

  const inputEventHandler = (event) => {
    if (!["blur", "change", "focus"].includes(event.type)) return;
    setSuccess(false);
    const element = event.target.name;
    const newValue = event.target.value;
    let newStatus = event.type === "focus" ? -1 : newValue ? 1 : 0;

    switch (element) {
      case "name":
        setName(
          event.type === "blur"
            ? {
                ...name,
                status: newStatus,
              }
            : {
                value: newValue,
                status: newStatus,
              }
        );
        break;
      case "email":
        newStatus =
          newStatus === -1
            ? newStatus
            : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                newValue
              )
            ? 1
            : 0;
        setEmail(
          event.type === "blur"
            ? {
                ...email,
                status: newStatus,
              }
            : {
                value: newValue,
                status: newStatus,
              }
        );
        break;
      case "website":
        setWebsite(
          event.type === "blur"
            ? {
                ...website,
                status: newStatus,
              }
            : {
                value: newValue,
                status: newStatus,
              }
        );
        break;
      case "comment":
        setComment(
          event.type === "blur"
            ? {
                ...comment,
                status: newStatus,
              }
            : {
                value: newValue,
                status: newStatus,
              }
        );
        break;
      default:
        break;
    }
  };

  const submitHandler = (event) => {
    let [, month, day, year] = new Date().toDateString().split(" ");
    const commentData = {
      id: 999 + keyGenerator(),
      parentId: parentId > 999 ? 0 : parentId,
      name: name.value,
      email: name.value, //email.value,
      website: website.value,
      body: comment.value,
      img: `/assets/img/dummy${Number.parseInt(Math.random() * 6) + 1}.jpg`,
      date: `${day} ${month}, ${year}`,
    };
    setSuccess(true);
    callback(commentData);

    event.preventDefault();
  };

  return (
    <div className="recommendation">
      <SideCardTemplate title="LEAVE A COMMENT">
        <Card.Body className="pt-0 mt-2">
          <Form onSubmit={submitHandler}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    autoComplete="off"
                    onBlur={inputEventHandler}
                    onFocus={inputEventHandler}
                    onChange={inputEventHandler}
                    isValid={name.status === 1}
                    isInvalid={name.status === 0}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    onBlur={inputEventHandler}
                    onFocus={inputEventHandler}
                    onChange={inputEventHandler}
                    isValid={email.status === 1}
                    isInvalid={email.status === 0}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="website"
                    placeholder="Website"
                    autoComplete="off"
                    onBlur={inputEventHandler}
                    onFocus={inputEventHandler}
                    onChange={inputEventHandler}
                    isValid={website.status === 1}
                    isInvalid={website.status === 0}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6} sm={12}>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="comment"
                    rows={3}
                    placeholder="Write your comment ..."
                    autoComplete="off"
                    onBlur={inputEventHandler}
                    onFocus={inputEventHandler}
                    onChange={inputEventHandler}
                    isValid={comment.status === 1}
                    isInvalid={comment.status === 0}
                    required
                  />
                </Form.Group>

                <Button type="submit" variant="dark" className="comment-submit">
                  POST COMMENT
                </Button>
              </Col>
            </Row>
          </Form>
          {success && (
            <Alert variant="success">Comment is saved succesfully!</Alert>
          )}
        </Card.Body>
      </SideCardTemplate>
    </div>
  );
};

export default Comments;
