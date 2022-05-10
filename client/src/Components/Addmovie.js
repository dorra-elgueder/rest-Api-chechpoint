import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addmovies } from "../Redux/Action/movieaction";

const Addmovie = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name movie</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter name movie"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Enter description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button
          variant="primary"
          onClick={() => {
            dispatch(addmovies({ name, description, category }));
            navigate("/movies");
          }}
          type="submit"
        >
          add new movie
        </Button>
      </Form>
    </div>
  );
};

export default Addmovie;
