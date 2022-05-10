import React from "react";

import { useState } from "react";
import {
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/Action/userAction";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ email, password }, navigate));
        }}
      >
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
              Email
            </Form.Label>
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Password
            </Form.Label>
            <InputGroup
              className="mb-2"
              onChange={(e) => setPassword(e.target.value)}
            >
              <InputGroup.Text> Password</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Password" />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="checkbox"
              id="autoSizingCheck"
              className="mb-2"
              label="Remember me"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <img
        src="https://thumbs.dreamstime.com/b/ardoise-de-film-et-bobine-de-film-sur-le-bois-36502412.jpg"
        width="1000px"
      />
    </div>
  );
}

export default Login;
