module.exports = (knex, ingredient) => {
  return knex("ingredients")
    .select()
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};
