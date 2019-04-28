const express = require("express");
const ingredientsAction = require("../services/db/ingredients/ingredientsAction");
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

function filterOnNameOrId(array, nameOrId) {
  return array.filter(ingredient => {
    return ~~ingredient.id === ~~nameOrId || ingredient.item_name === nameOrId;
  });
}

const server = () => {
  const app = express();
  app.use(express.json());

  app.use("/api/ingredients", (req, res, next) => {
    const data = ingredientsAction.get(knex);

    data
      .then(info => {
        req.allIngredients = info;
        next();
      })
      .catch(err => {
        return new Error(err.message);
      });
  });

  app.get("/api/ingredients", (req, res) => {
    res.send(req.allIngredients);
  });

  app.get("/api/ingredients/:nameOrId", (req, res) => {
    const { nameOrId } = req.params;
    res.send(filterOnNameOrId(req.allIngredients, nameOrId)[0]);
  });

  app.post("/api/ingredients/", (req, res) => {
    const newIngredient = req.body;
    ingredientsAction
      .post(knex, newIngredient)
      .then(postedIngredient => {
        res.send(postedIngredient);
      })
      .catch(err => {
        res.status(400).send("Invalid Ingredient");
        console.log(err);
      });
  });

  app.delete("/api/ingredients/:nameOrId", (req, res) => {
    const { nameOrId } = req.params;
    const ingredientToDelete = filterOnNameOrId(
      req.allIngredients,
      nameOrId
    )[0];
    ingredientsAction
      .del(knex, ingredientToDelete.id)
      .then(message => {
        res.status(200).send(message);
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  });

  app.patch("/api/ingredients/:nameOrId", (req, res) => {
    const { nameOrId } = req.params;
    const changes = req.body;
    ingredientsAction
      .patch(knex, nameOrId, changes)
      .then(changedIngredient => {
        res.status(200).send(changedIngredient);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err.message);
      });
  });

  return app;
};

module.exports = { server };
