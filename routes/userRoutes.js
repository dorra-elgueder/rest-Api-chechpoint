const express = require("express");
const { Register, login } = require("../controllers/userControllers");
const { isAuth } = require("../middelwares/auth");
const {
  RegisterValidation,
  loginValidation,
  validation,
} = require("../middelwares/validation");

const Router = express.Router();

//post:
//register
Router.post("/register", RegisterValidation, validation, Register);
//login
Router.post("/login", loginValidation, validation, login);

Router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});
module.exports = Router;
