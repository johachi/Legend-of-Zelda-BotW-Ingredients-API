exports.up = function(knex, Promise) {
  return knex.schema.createTable("item_types", table => {
    table.increments().index();
    table.string("type").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("item_types");
};
