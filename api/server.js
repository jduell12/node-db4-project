const express = require("express");

const server = express();

const recipeRouter = require("../recipes/recipe-router");

server.use(express.json());
server.use("/api/recipes", recipeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ server: "working" });
});

module.exports = server;
