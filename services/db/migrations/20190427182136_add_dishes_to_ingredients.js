exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes_to_ingredients", table => {
    table.increments().index();

    table.integer("dish_id").notNullable();
    table.integer("ingredient_id").notNullable();
    table.integer("amount").notNullable();

    table
      .foreign("dish_id")
      .references("id")
      .inTable("dishes");

    table
      .foreign("ingredient_id")
      .references("id")
      .inTable("ingredients");

    table.unique(["dish_id", "ingredient_id"]);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("dishes_to_ingredients");
};
