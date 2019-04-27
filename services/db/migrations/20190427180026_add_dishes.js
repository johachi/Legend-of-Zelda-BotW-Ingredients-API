exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", table => {
    table.increments().index();

    table.string("dish_name").notNullable();
    table.decimal("hearts").notNullable();
    table.string("description").notNullable();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("dishes");
};
