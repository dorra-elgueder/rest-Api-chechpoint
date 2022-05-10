import React from "react";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, getonemovie } from "../Redux/Action/movieaction";
import { useNavigate, useParams } from "react-router-dom";

const Editmovie = () => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(getonemovie(id));
  }, []);
  const movie = useSelector((state) => state.movieReducer.movie);

  const [name, setName] = useState(movie.name);
  const [description, setDescription] = useState(movie.description);
  const [category, setCategory] = useState(movie.category);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  useEffect(() => {
    setName(movie.name);
    setDescription(movie.description);
    setCategory(movie.category);
  }, []);
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
            dispatch(editMovie(id, { name, description, category }));
            Navigate(`/movies`);
          }}
          type="submit"
        >
          Edit movie
        </Button>
      </Form>
    </div>
  );
};

export default Editmovie;
