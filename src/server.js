const express = require("express");
const getIngredients = require("../services/db/ingredients/get");
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
        console.log(ingredient.item_name, nameOrId);
        return (
          ~~ingredient.id === ~~nameOrId || ingredient.item_name === nameOrId
        );
      })
    );
  });

  return app;
};

module.exports = { server };
