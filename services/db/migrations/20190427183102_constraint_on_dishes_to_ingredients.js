exports.up = function(knex, Promise) {
  return knex.schema.raw(
    "ALTER TABLE dishes_to_ingredients ADD check (amount > 0)"
  );
};

exports.down = function(knex, Promise) {};
