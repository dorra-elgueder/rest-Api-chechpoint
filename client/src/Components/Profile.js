import React from "react";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <h1>welcome to your profile {user && user.name}</h1>
      <Nav.Link as={Link} to="/movielist">
        movie list
      </Nav.Link>
    </div>
  );
};

export default Profile;
