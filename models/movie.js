const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
});

module.exports = mongoose.model("movie", movieSchema);
