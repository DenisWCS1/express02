const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.APP_PORT ?? 6000;
const welcome = (req, res) => {
  res.send("Welcome to my favourite Users list");
};
const userHandlers = require("./usersHandlers");

app.get("/", welcome);
app.get("/api/Users", userHandlers.getUsers);
app.get("/api/Users/:id", userHandlers.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
