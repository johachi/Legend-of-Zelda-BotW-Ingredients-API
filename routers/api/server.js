const express = require("express");

const server = () => {
  const app = express();
  app.use(express.json());

  app.get("/api/ingredients", (req, res) => {
    res.send("woohoo!");
  });

  return app;
};

module.exports = { server };
