exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        {
          dish_name: "Hearty Fruitcake",
          hearts: 108,
          description:
            "This recipe requires two different fruit, cane sugar and tabantha wheat(Apple,Wildberry,Palm Fruit and Hearty Durian only) other fruit will result in a different dish like Sneaky Mighty Tough or plain Fruitcake etc."
        },
        {
          dish_name: "Hearty Clam Chowder",
          hearts: 103,
          description:
            "This recipe only works with the Hearty Blueshell Snail, any other snails will result in a different dish"
        },
        {
          dish_name: "Hearty Seafood Rice Balls",
          hearts: 103,
          description:
            "This happened when using the Hearty Clam Chowder recipe. (Be careful not to put in rice instead of wheat. They're very similar.)"
        },
        {
          dish_name: "Hearty Seafood Rice Balls",
          hearts: 116,
          description:
            "17 extra hearts if made from 11:30-12:00 during bloodmoon."
        },
        {
          dish_name: "Hearty Veggie Rice Balls",
          hearts: 112,
          description:
            "If you use four Big Hearty Radish instead, it will result in a full recovery and 20 temporary hearts."
        },
        {
          dish_name: "Hearty Fried Wild Greens",
          hearts: 103,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Fried Wild Greens",
          hearts: 112,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Fruit and Mushroom Mix",
          hearts: 105,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Meat Skewer",
          hearts: 104,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Seafood Skewer",
          hearts: 103,
          description:
            "5 Snails = 15 temporary hearts, 16 if cooked between 11:30-12:00 on a bloodmoon"
        },
        {
          dish_name: "Hearty Mushroom Skewer",
          hearts: 101,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Mushroom Skewer",
          hearts: 109,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Meat and Mushroom Skewer",
          hearts: 101,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Omelet",
          hearts: 101,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Simmered Fruit",
          hearts: 104,
          description:
            "Each Durian adds an extra 4 temporary hearts for a maximum of 20."
        },
        {
          dish_name: "Hearty Salmon Meuniére",
          hearts: 104,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 104,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 108,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 112,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 115,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 115,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 115,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 120,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Meat",
          hearts: 120,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Salt-Grilled Prime Meat",
          hearts: 107,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Salt-Grilled Prime Meat",
          hearts: 109,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Salt-Grilled Prime Meat",
          hearts: 111,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Fish",
          hearts: 107,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Fish",
          hearts: 109,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Steamed Fish",
          hearts: 119,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Milk",
          hearts: 109,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Seafood Fried Rice",
          hearts: 106,
          description:
            "You can probably replace the two blueshell snails with any seafood to get a different effect"
        },
        {
          dish_name: "Hearty Gourmet Meat and Seafood Fry",
          hearts: 115,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Meaty Rice Balls",
          hearts: 113,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Monster Rice Balls",
          hearts: 105,
          description:
            "Monster Extract causes a gamble. Possible to have only 1 extra heart."
        },
        {
          dish_name: "Hearty Simmered Fruit",
          hearts: 120,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Fish Pie",
          hearts: 104,
          description: "this item is missing description"
        },
        {
          dish_name: "Hearty Fish Skewer",
          hearts: 102,
          description: "this item is missing description"
        }
      ]);
    });
};
