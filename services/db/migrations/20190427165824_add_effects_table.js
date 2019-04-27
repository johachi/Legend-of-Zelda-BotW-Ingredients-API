
exports.up = function(knex, Promise) {
  return knex.schema.createTable("effects", (table) => {
    
    table.increments().index();

    table.string("effect_type").notNullable();
    table.integer("max_potency").notNullable();
    table.boolean("duration").notNullable()
    table.string("description").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("effects");
};
