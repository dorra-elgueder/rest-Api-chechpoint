const express = require("express");
const ConnectDb = require("./config/ConnectDb");
const MovieRoutes = require("./routes/movieroute");
const Router = require("./routes/userRoutes");
const app = express();

const port = process.env.port || 5000;
//db connection
ConnectDb();
//routes
app.use(express.json());
app.use("/api/users", Router);
app.use("/api/movies", MovieRoutes);
app.listen(
  port,
  console.log(`server is connected and running on http://localhost: ${port}`)
);
