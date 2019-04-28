exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes_to_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes_to_ingredients").insert([
        { dish_id: 1, ingredient_id: 26, amount: 1 },
        { dish_id: 1, ingredient_id: 31, amount: 1 },
        { dish_id: 1, ingredient_id: 36, amount: 1 },
        { dish_id: 1, ingredient_id: 102, amount: 2 },
        { dish_id: 2, ingredient_id: 27, amount: 1 },
        { dish_id: 2, ingredient_id: 29, amount: 1 },
        { dish_id: 2, ingredient_id: 36, amount: 1 },
        { dish_id: 2, ingredient_id: 101, amount: 1 }
      ]);
    });
};
