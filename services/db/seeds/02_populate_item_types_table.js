exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("item_types")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("item_types").insert([
        { type: "None"},
        { type: "Critter" },
        { type: "Filler" },
        { type: "Fruit" },
        { type: "Green" },
        { type: "Meat" },
        { type: "Monster Part" },
        { type: "Mushroom" },
        { type: "Other" },
        { type: "Seafood" },
        { type: "Seasoning" }
      ]);
    });
};
