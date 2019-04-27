exports.up = function(knex, Promise) {
  return knex.schema("ingredients", table => {
    table.increments().index();

    table.string("item_name").notNullable();
    table.string("type").notNullable();
    table.decimal("hearts").notNullable();
    table.integer("effect").notNullable();
    table.string("potency").notNullable();
    table.integer("duration").notNullable();
    table.integer("resale_value");

    table
      .foreign("effect")
      .reference("id")
      .inTable("effects");
  });
};

exports.down = function(knex, Promise) {};
