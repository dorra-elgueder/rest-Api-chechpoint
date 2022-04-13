const express = require("express");
const ConnectDb = require("./config/ConnectDb");
const app = express();

const port = process.env.port || 5000;

ConnectDb();
app.listen(
  port,
  console.log(`server is connected and running on http://localhost: ${port}`)
);
