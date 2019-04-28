const express = require("express");
const getIngredients = require("../services/db/ingredients/get");
const postIngredients = require("../services/db/ingredients/post");
const { db } = require("../config");
const Knex = require("knex");

const knex = Knex({
  client: db.client,
  port: db.connection.port,
  connection: {
    host: db.connection.host,
    database: db.connection.database
  }
});

const server = () => {
  const app = express();
  app.use(express.json());

  app.use("/api/ingredients", (req, res, next) => {
    const data = getIngredients(knex, 9);

    data
      .then(info => {
        req.allIngredients = info;
        next();
      })
      .catch(err => {
        return new Error(err.message);
      });
  });

  app.get("/api/ingredients", (req, res, next) => {
    res.send(req.allIngredients);
  });

  app.get("/api/ingredients/:nameOrId", (req, res) => {
    const { nameOrId } = req.params;
    res.send(
      req.allIngredients.filter(ingredient => {
        return (
          ~~ingredient.id === ~~nameOrId || ingredient.item_name === nameOrId
        );
      })
    );
  });

  app.post("/api/ingredients/", (req, res) => {
    const newIngredient = req.body;
    postIngredients(knex, newIngredient)
      .then(postedIngredient => {
        res.send(postedIngredient);
      })
      .catch(err => {
        res.status(400).send("Invalid Ingredient");
        console.log(err);
      });
  });

  return app;
};

module.exports = { server };
