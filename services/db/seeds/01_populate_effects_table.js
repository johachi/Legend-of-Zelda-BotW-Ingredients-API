exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("effects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("effects").insert([
        {
          effect_type: "NONE",
          max_potency: 0,
          duration: false,
          description: "None effect"
        },
        {
          effect_type: "Chilly",
          max_potency: 2,
          duration: true,
          description: "Resistance to heat"
        },
        {
          effect_type: "Energizing",
          max_potency: 15,
          duration: false,
          description: "Restores 1/5 stamina wheel"
        },
        {
          effect_type: "Enduring",
          max_potency: 10,
          duration: false,
          description: "Restores all stamina, adds 1/5 backup wheel"
        },
        {
          effect_type: "Electro",
          max_potency: 3,
          duration: true,
          description: "Resistance to shock"
        },
        {
          effect_type: "Fireproof",
          max_potency: 2,
          duration: true,
          description: "Prevents catching fire"
        },
        {
          effect_type: "Hasty",
          max_potency: 3,
          duration: true,
          description: "Increases running, climbing, and swimming speed by 1/3"
        },
        {
          effect_type: "Hearty",
          max_potency: 25,
          duration: false,
          description: "Restores all hearts, adds 1 extra heart"
        },
        {
          effect_type: "Mighty",
          max_potency: 3,
          duration: true,
          description: "Increases attack power by 20%/30%/50%"
        },
        {
          effect_type: "Sneaky",
          max_potency: 3,
          duration: true,
          description: "Improves stealth"
        },
        {
          effect_type: "Spicy",
          max_potency: 2,
          duration: true,
          description: "Resistance to cold"
        },
        {
          effect_type: "Tough",
          max_potency: 3,
          duration: true,
          description: "Increases defense by 4/12/24 "
        }
      ]);
    });
};
