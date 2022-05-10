import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletemovie } from "../Redux/Action/movieaction";

const Moviecard = ({ movie }) => {
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {movie.name} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movie.category}
          </Card.Subtitle>
          <Card.Text> {movie.description}</Card.Text>
        </Card.Body>
        {user && user.isAdmin === true ? (
          <Button
            variant="danger"
            onClick={() => dispatch(deletemovie(movie._id))}
          >
            delete
          </Button>
        ) : (
          ""
        )}

        {user && user.isAdmin === true ? (
          <Link to={`/edit/${movie._id}`}>
            <Button variant="info">Edit</Button>
          </Link>
        ) : (
          ""
        )}
        <button> watch Movie</button>
      </Card>
    </div>
  );
};

export default Moviecard;
