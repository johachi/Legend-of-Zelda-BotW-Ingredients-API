module.exports = (knex, ingredientId) => {
  if (typeof ingredientId !== "number") {
    return new Promise((resolve, reject) => {
      reject(new Error("delete.js: Invalid ingredient id."));
    });
  }
  return knex("ingredients")
    .where({ id: ingredientId })
    .del()
    .then(() => {
      return new Promise((resolve, reject) => {
        resolve("Item was deleted");
      });
    })
    .catch(err => {
      return new Promise((resolve, reject) => {
        reject(new Error(err.message));
      });
    });
};
