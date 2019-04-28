function validIngredient(ingredient) {
  let isValid = true;
  const standardIngredient = {
    item_name: "string",
    type: "string",
    hearts: "string",
    effect: "number",
    potency: "string",
    duration: "number",
    resale_value: "number"
  };

  for (const key in standardIngredient) {
    if (typeof ingredient[key] !== standardIngredient[key]) {
      isValid = false;
    }
  }

  return (
    isValid &&
    Object.keys(ingredient).length === Object.keys(standardIngredient).length
  );
}

module.exports = (knex, ingredient) => {
  if (!validIngredient(ingredient)) {
    return new Promise((resolve, reject) => {
      reject(new Error("validIngredient(): Invalid ingredient."));
    });
  }

  return knex("ingredients")
    .returning("id")
    .insert(ingredient)
    .then(ingredientID => {
      return knex
        .select()
        .from("ingredients")
        .where({ id: parseInt(ingredientID) });
    })
    .catch(err => {
      return err;
    });
};
