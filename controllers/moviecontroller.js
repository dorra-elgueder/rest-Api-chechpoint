const movie = require("../models/movie");

exports.Addmovie = async (req, res) => {
  try {
    const newMovies = new movie(req.body);

    const found = await movie.findOne({ name: req.body.name });
    if (found) {
      return res.status(400).send("movie is already exist");
    }

    await newMovies.save();
    res.status(200).send({ msg: "movie added", newMovies });
  } catch (error) {
    res.status(500).send("movie can not added");
  }
};

exports.Findmovie = async (req, res) => {
  try {
    const movies = await movie.find();
    res.status(200).send({ msg: "this the movies list", movies });
  } catch (error) {
    res.status(500).send("could not get movies");
  }
};

exports.Deletemovie = async (req, res) => {
  try {
    const deletemovie = await movie.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "movie was deleted", deletemovie });
  } catch (error) {
    res.status(500).send("could not delete movie");
  }
};

exports.Updatemovie = async (req, res) => {
  try {
    const updatemovie = await movie.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).send({ msg: "movie updated successfully", updatemovie });
  } catch (error) {
    res.status(500).send("could not update movie");
  }
};

exports.FindOne = async (req, res) => {
  try {
    const onemovie = await movie.findById(req.params.id);
    console.log(onemovie);

    res.status(200).send({ msg: "one movie found", onemovie });
  } catch (error) {
    res.status(500).send("could not get one movie");
  }
};
