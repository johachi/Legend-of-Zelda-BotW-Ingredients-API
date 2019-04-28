exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          item_name: "Dinraal’s Scale",
          type: 3,
          hearts: 0.625,
          effect: 1,
          potency: 1,
          duration: 7200,
          resale_value: 1
        },
        {
          item_name: "Naydra’s Scale",
          type: 3,
          hearts: 0.625,
          effect: 1,
          potency: 1,
          duration: 7200,
          resale_value: 1
        },
        {
          item_name: "Dinraal’s Claw",
          type: 3,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 14400,
          resale_value: 1
        },
        {
          item_name: "Farosh’s Claw",
          type: 3,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 14400,
          resale_value: 1
        },
        {
          item_name: "Naydra’s Claw",
          type: 3,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 14400,
          resale_value: 1
        },
        {
          item_name: "Shard of Dinraal’s Fang",
          type: 3,
          hearts: 1.25,
          effect: 1,
          potency: 1,
          duration: 39600,
          resale_value: 1
        },
        {
          item_name: "Shard of Naydra’s Fang",
          type: 3,
          hearts: 1.25,
          effect: 1,
          potency: 1,
          duration: 39600,
          resale_value: 1
        },
        {
          item_name: "Shard of Dinraal’s Horn",
          type: 3,
          hearts: 1.875,
          effect: 1,
          potency: 1,
          duration: 108000,
          resale_value: 1
        },
        {
          item_name: "Shard of Naydra’s Horn",
          type: 3,
          hearts: 1.875,
          effect: 1,
          potency: 1,
          duration: 108000,
          resale_value: 1
        },
        {
          item_name: "Rock Salt",
          type: 11,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 3600,
          resale_value: 2
        },
        {
          item_name: "Fairy",
          type: 3,
          hearts: 5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 2
        },
        {
          item_name: "Winterwing Butterfly",
          type: 2,
          hearts: 0,
          effect: 2,
          potency: "1/1/1/1",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Hightail Lizard",
          type: 2,
          hearts: 0,
          effect: 7,
          potency: "1/1/1/1",
          duration: 3600,
          resale_value: 2
        },
        {
          item_name: "Sunset Firefly",
          type: 2,
          hearts: 0,
          effect: 10,
          potency: "1/1/1/1",
          duration: 7200,
          resale_value: 2
        },
        {
          item_name: "Summerwing Butterfly",
          type: 2,
          hearts: 0,
          effect: 11,
          potency: "1/1/1/1",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Thunderwing Butterfly",
          type: 2,
          hearts: 0,
          effect: 5,
          potency: "1/1/1/2",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Hot-footed Frog",
          type: 2,
          hearts: 0,
          effect: 7,
          potency: "1/1/2/3",
          duration: 3600,
          resale_value: 2
        },
        {
          item_name: "Cold Darner",
          type: 2,
          hearts: 0,
          effect: 2,
          potency: "1/1/3/3",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Warm Darner",
          type: 2,
          hearts: 0,
          effect: 11,
          potency: "1/1/3/3",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Electric Darner",
          type: 2,
          hearts: 0,
          effect: 5,
          potency: "1/2/3/3",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Restless Cricket",
          type: 2,
          hearts: 0,
          effect: 3,
          potency: "1/2/4/5",
          duration: 0,
          resale_value: 2
        },
        {
          item_name: "Smotherwing Butterfly",
          type: 2,
          hearts: 0,
          effect: 6,
          potency: "2/2/2/2",
          duration: 9000,
          resale_value: 2
        },
        {
          item_name: "Energetic Rhino Beetle",
          type: 2,
          hearts: 0,
          effect: 3,
          potency: "8/15/15/15",
          duration: 0,
          resale_value: 2
        },
        {
          item_name: "Keese Wing",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 2
        },
        {
          item_name: "Acorn",
          type: 11,
          hearts: 0.25,
          effect: 1,
          potency: 1,
          duration: 3000,
          resale_value: 2
        },
        {
          item_name: "Cane Sugar",
          type: 11,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4800,
          resale_value: 3
        },
        {
          item_name: "Goat Butter",
          type: 11,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4800,
          resale_value: 3
        },
        {
          item_name: "Chickaloo Tree Nut",
          type: 11,
          hearts: 0.25,
          effect: 1,
          potency: 1,
          duration: 2400,
          resale_value: 3
        },
        {
          item_name: "Fresh Milk",
          type: 3,
          hearts: 0.5,
          effect: 1,
          potency: 1,
          duration: 4800,
          resale_value: 3
        },
        {
          item_name: "Apple",
          type: 4,
          hearts: 0.5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 3
        },
        {
          item_name: "Wildberry",
          type: 4,
          hearts: 0.5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 3
        },
        {
          item_name: "Hylian Shroom",
          type: 8,
          hearts: 0.5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 3
        },
        {
          item_name: "Bird Egg",
          type: 3,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 5400,
          resale_value: 3
        },
        {
          item_name: "Hyrule Herb",
          type: 5,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 3
        },
        {
          item_name: "Hylian Rice",
          type: 11,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 3600,
          resale_value: 3
        },
        {
          item_name: "Tabantha Wheat",
          type: 11,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 3600,
          resale_value: 3
        },
        {
          item_name: "Cool Saffina",
          type: 5,
          hearts: 0,
          effect: 2,
          potency: "1/1/1/1/1",
          duration: 9000,
          resale_value: 3
        },
        {
          item_name: "Warm Saffina",
          type: 5,
          hearts: 0,
          effect: 11,
          potency: "1/1/1/1/1",
          duration: 9000,
          resale_value: 3
        },
        {
          item_name: "Spicy Pepper",
          type: 4,
          hearts: 0.5,
          effect: 11,
          potency: "1/1/1/1/1",
          duration: 9000,
          resale_value: 3
        },
        {
          item_name: "Rushroom",
          type: 8,
          hearts: 0.5,
          effect: 7,
          potency: "1/1/1/1/2",
          duration: 3600,
          resale_value: 3
        },
        {
          item_name: "Electric Saffina",
          type: 5,
          hearts: 0,
          effect: 5,
          potency: "1/1/1/2/2",
          duration: 9000,
          resale_value: 3
        },
        {
          item_name: "Silent Shroom",
          type: 8,
          hearts: 0.5,
          effect: 10,
          potency: "1/1/2/2/3",
          duration: 7200,
          resale_value: 3
        },
        {
          item_name: "Monster Extract",
          type: 9,
          hearts: 0,
          effect: 1,
          potency: "-2 or 0",
          duration: 133898400,
          resale_value: 3
        },
        {
          item_name: "Bokoblin Horn",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 3
        },
        {
          item_name: "Goron Spice",
          type: 11,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 5400,
          resale_value: 4
        },
        {
          item_name: "Palm Fruit",
          type: 4,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 4
        },
        {
          item_name: "Bladed Rhino Beetle",
          type: 2,
          hearts: 0,
          effect: 9,
          potency: "1/1/1/1",
          duration: 3000,
          resale_value: 4
        },
        {
          item_name: "Rugged Rhino Beetle",
          type: 2,
          hearts: 0,
          effect: 12,
          potency: "1/1/1/1",
          duration: 3000,
          resale_value: 4
        },
        {
          item_name: "Blue Nightshade",
          type: 5,
          hearts: 0,
          effect: 10,
          potency: "1/1/1/1/1",
          duration: 7200,
          resale_value: 4
        },
        {
          item_name: "Hydromelon",
          type: 4,
          hearts: 0.5,
          effect: 2,
          potency: "1/1/1/1/1",
          duration: 9000,
          resale_value: 4
        },
        {
          item_name: "Swift Carrot",
          type: 5,
          hearts: 0.5,
          effect: 7,
          potency: "1/1/1/1/2",
          duration: 3600,
          resale_value: 4
        },
        {
          item_name: "Voltfruit",
          type: 4,
          hearts: 0.5,
          effect: 5,
          potency: "1/1/1/2/2",
          duration: 9000,
          resale_value: 4
        },
        {
          item_name: "Chillshroom",
          type: 8,
          hearts: 0.5,
          effect: 2,
          potency: "1/1/2/2/2",
          duration: 9000,
          resale_value: 4
        },
        {
          item_name: "Sunshroom",
          type: 8,
          hearts: 0.5,
          effect: 11,
          potency: "1/1/2/2/2",
          duration: 9000,
          resale_value: 4
        },
        {
          item_name: "Zapshroom",
          type: 8,
          hearts: 0.5,
          effect: 5,
          potency: "1/2/3/3/3",
          duration: 9000,
          resale_value: 4
        },
        {
          item_name: "Fireproof Lizard",
          type: 2,
          hearts: 0,
          effect: 6,
          potency: "1/1/1/1",
          duration: 9000,
          resale_value: 5
        },
        {
          item_name: "Mighty Thistle",
          type: 5,
          hearts: 0,
          effect: 9,
          potency: "1/1/1/1/2",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Armoranth",
          type: 5,
          hearts: 0,
          effect: 12,
          potency: "1/1/1/1/2",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Fleet-Lotus Seeds",
          type: 4,
          hearts: 0.5,
          effect: 7,
          potency: "1/1/2/3/3",
          duration: 3600,
          resale_value: 5
        },
        {
          item_name: "Mighty Bananas",
          type: 4,
          hearts: 0.5,
          effect: 9,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Razorshroom",
          type: 8,
          hearts: 0.5,
          effect: 9,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Fortified Pumpkin",
          type: 5,
          hearts: 0.5,
          effect: 12,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Ironshroom",
          type: 8,
          hearts: 0.5,
          effect: 12,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 5
        },
        {
          item_name: "Stamella Shroom",
          type: 8,
          hearts: 0.5,
          effect: 3,
          potency: "1/2/4/5/7",
          duration: 0,
          resale_value: 5
        },
        {
          item_name: "Chuchu Jelly",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 5
        },
        {
          item_name: "Moblin Horn",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 5
        },
        {
          item_name: "Octo Balloon",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 5
        },
        {
          item_name: "Hearty Truffle",
          type: 8,
          hearts: 2,
          effect: 8,
          potency: "1",
          duration: 0,
          resale_value: 6
        },
        {
          item_name: "Hyrule Bass",
          type: 10,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 6
        },
        {
          item_name: "Sneaky River Snail",
          type: 10,
          hearts: 1,
          effect: 10,
          potency: "1/1/1/1/1",
          duration: 7200,
          resale_value: 6
        },
        {
          item_name: "Endura Shroom",
          type: 8,
          hearts: 1,
          effect: 4,
          potency: "1/1/1/2/2",
          duration: 0,
          resale_value: 6
        },
        {
          item_name: "Chillfin Trout",
          type: 10,
          hearts: 1,
          effect: 2,
          potency: "1/2/2/2/2",
          duration: 9000,
          resale_value: 6
        },
        {
          item_name: "Sizzlefin Trout",
          type: 10,
          hearts: 1,
          effect: 11,
          potency: "1/2/2/2/2",
          duration: 9000,
          resale_value: 6
        },
        {
          item_name: "Voltfin Trout",
          type: 10,
          hearts: 1,
          effect: 5,
          potency: "1/3/3/3/3",
          duration: 9000,
          resale_value: 6
        },
        {
          item_name: "Electric Keese Wing",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 6
        },
        {
          item_name: "Fire Keese Wing",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 6
        },
        {
          item_name: "Ice Keese Wing",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 6
        },
        {
          item_name: "Hearty Radish",
          type: 5,
          hearts: 2.5,
          effect: 8,
          potency: "3",
          duration: 0,
          resale_value: 8
        },
        {
          item_name: "Raw Meat",
          type: 6,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 8
        },
        {
          item_name: "Raw Bird Drumstick",
          type: 6,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 8
        },
        {
          item_name: "Razorclaw Crab",
          type: 10,
          hearts: 1,
          effect: 9,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 8
        },
        {
          item_name: "Ironshell Crab",
          type: 10,
          hearts: 1,
          effect: 12,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 8
        },
        {
          item_name: "Bokoblin Fang",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 8
        },
        {
          item_name: "Hearty Salmon",
          type: 10,
          hearts: 4,
          effect: 8,
          potency: "4",
          duration: 0,
          resale_value: 10
        },
        {
          item_name: "Stealthfin Trout",
          type: 10,
          hearts: 1,
          effect: 10,
          potency: "1/1/2/2/3",
          duration: 7200,
          resale_value: 10
        },
        {
          item_name: "Swift Violet",
          type: 5,
          hearts: 0,
          effect: 7,
          potency: "1/1/2/3/3",
          duration: 3600,
          resale_value: 10
        },
        {
          item_name: "Mighty Carp",
          type: 10,
          hearts: 1,
          effect: 9,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 10
        },
        {
          item_name: "Armored Carp",
          type: 10,
          hearts: 1,
          effect: 12,
          potency: "1/1/2/3/3",
          duration: 3000,
          resale_value: 10
        },
        {
          item_name: "Mighty Porgy",
          type: 10,
          hearts: 1,
          effect: 9,
          potency: "1/2/3/3/3",
          duration: 3000,
          resale_value: 10
        },
        {
          item_name: "Silent Princess",
          type: 5,
          hearts: 1,
          effect: 10,
          potency: "1/2/3/3/3",
          duration: 7200,
          resale_value: 10
        },
        {
          item_name: "Armored Porgy",
          type: 10,
          hearts: 1,
          effect: 12,
          potency: "1/2/3/3/3",
          duration: 3000,
          resale_value: 10
        },
        {
          item_name: "Bright-eyed Crab",
          type: 10,
          hearts: 1,
          effect: 3,
          potency: "2/5/8/11/14",
          duration: 0,
          resale_value: 10
        },
        {
          item_name: "Courser Bee Honey",
          type: 11,
          hearts: 2,
          effect: 3,
          potency: "2/5/8/11/14",
          duration: 0,
          resale_value: 10
        },
        {
          item_name: "Lizalfos Horn",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 10
        },
        {
          item_name: "Octorok Tentacle",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 10
        },
        {
          item_name: "Red Chuchu Jelly",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 10
        },
        {
          item_name: "White Chuchu Jelly",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 10
        },
        {
          item_name: "Yellow Chuchu Jelly",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 10
        },
        {
          item_name: "Ancient Screw",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 12
        },
        {
          item_name: "Moblin Fang",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 12
        },
        {
          item_name: "Hearty Blueshell Snail",
          type: 10,
          hearts: 3,
          effect: 8,
          potency: "3",
          duration: 0,
          resale_value: 15
        },
        {
          item_name: "Hearty Durian",
          type: 4,
          hearts: 3,
          effect: 8,
          potency: "4",
          duration: 0,
          resale_value: 15
        },
        {
          item_name: "Big Hearty Truffle",
          type: 8,
          hearts: 3,
          effect: 8,
          potency: "4",
          duration: 0,
          resale_value: 15
        },
        {
          item_name: "Big Hearty Radish",
          type: 5,
          hearts: 4,
          effect: 8,
          potency: "5",
          duration: 0,
          resale_value: 15
        },
        {
          item_name: "Raw Prime Meat",
          type: 6,
          hearts: 1.5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 15
        },
        {
          item_name: "Raw Bird Thigh",
          type: 6,
          hearts: 1.5,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 15
        },
        {
          item_name: "Ancient Spring",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 15
        },
        {
          item_name: "Lizalfos Talon",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 15
        },
        {
          item_name: "Hearty Bass",
          type: 10,
          hearts: 2,
          effect: 8,
          potency: "2",
          duration: 0,
          resale_value: 18
        },
        {
          item_name: "Staminoka Bass",
          type: 10,
          hearts: 1,
          effect: 3,
          potency: "5/11/15",
          duration: 0,
          resale_value: 18
        },
        {
          item_name: "Sanke Carp",
          type: 10,
          hearts: 1,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 20
        },
        {
          item_name: "Tireless Frog",
          type: 2,
          hearts: 2,
          effect: 4,
          potency: "1/2/3/4",
          duration: 0,
          resale_value: 20
        },
        {
          item_name: "Hearty Lizard",
          type: 2,
          hearts: 0,
          effect: 8,
          potency: "4/8/12/16",
          duration: 0,
          resale_value: 20
        },
        {
          item_name: "Bokoblin Guts",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 20
        },
        {
          item_name: "Hinox Toenail",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 20
        },
        {
          item_name: "Keese Eyeball",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 20
        },
        {
          item_name: "Moblin Guts",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 25
        },
        {
          item_name: "Octorok Eyeball",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 25
        },
        {
          item_name: "Lizalfos Tail",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 28
        },
        {
          item_name: "Endura Carrot",
          type: 5,
          hearts: 2,
          effect: 4,
          potency: "2/4/6/8/10",
          duration: 0,
          resale_value: 30
        },
        {
          item_name: "Ancient Gear",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 30
        },
        {
          item_name: "Molduga Fin",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 30
        },
        {
          item_name: "Raw Gourmet Meat",
          type: 6,
          hearts: 3,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 35
        },
        {
          item_name: "Raw Whole Bird",
          type: 6,
          hearts: 3,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 35
        },
        {
          item_name: "Hinox Tooth",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 35
        },
        {
          item_name: "Icy Lizalfos Tail",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 35
        },
        {
          item_name: "Red Lizalfos Tail",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 35
        },
        {
          item_name: "Yellow Lizalfos Tail",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 35
        },
        {
          item_name: "Ancient Shaft",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 40
        },
        {
          item_name: "Lynel Horn",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 4200,
          resale_value: 40
        },
        {
          item_name: "Lynel Hoof",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 6600,
          resale_value: 50
        },
        {
          item_name: "Ancient Core",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 80
        },
        {
          item_name: "Hinox Guts",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 80
        },
        {
          item_name: "Molduga Guts",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 110
        },
        {
          item_name: "Farosh’s Scale",
          type: 3,
          hearts: 0.625,
          effect: 1,
          potency: 1,
          duration: 7200,
          resale_value: 150
        },
        {
          item_name: "Giant Ancient Core",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 200
        },
        {
          item_name: "Lynel Guts",
          type: 7,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 11400,
          resale_value: 200
        },
        {
          item_name: "Shard of Farosh’s Fang",
          type: 3,
          hearts: 1.25,
          effect: 1,
          potency: 1,
          duration: 39600,
          resale_value: 250
        },
        {
          item_name: "Shard of Farosh’s Horn",
          type: 3,
          hearts: 1.875,
          effect: 1,
          potency: 1,
          duration: 108000,
          resale_value: 300
        },
        {
          item_name: "Star Fragment",
          type: 9,
          hearts: 0,
          effect: 1,
          potency: 1,
          duration: 1800,
          resale_value: 300
        }
      ]);
    });
};
