const express = require("express");

const {
  Addmovie,
  Findmovie,
  Deletemovie,
  Updatemovie,
  FindOne,
} = require("../controllers/moviecontroller");

const MovieRoutes = express.Router();

MovieRoutes.post("/", Addmovie);

MovieRoutes.get("/getmovies", Findmovie);

MovieRoutes.delete("/deletemovie/:id", Deletemovie);

MovieRoutes.put("/updatemovie/:id", Updatemovie);

MovieRoutes.get("/:id", FindOne);

module.exports = MovieRoutes;
