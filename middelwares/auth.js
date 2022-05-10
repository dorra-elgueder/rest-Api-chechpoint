const users = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuth = async (req, res, next) => {
  const token = req.header("authentification");

  try {
    if (!token) {
      return res.status(400).send("you are not authorized");
    }
    const decoded = jwt.verify(token, process.env.secretkey);
    const user = await users.findbyId(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    console.log("server error");
  }
};
