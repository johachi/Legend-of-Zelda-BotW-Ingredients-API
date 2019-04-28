module.exports = (knex, ingredient) => {
  return knex("ingredients")
    .select()
    .then(data => {
      return data;
    })
    .catch(err => {
      return new Promise((resolve, reject) => {
        reject(new Error(err.message));
      });
    });
};
