
exports.up = function(knex, Promise) {
	return knex.schema("item_types", (table) => {
		table.increments().index();
		table.string("type").notNullable();
	})

};



exports.down = function(knex, Promise) {
	return knex.schema.dropTable("item_types");
};