function isValidIngredientPatch(ingredient) {
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

  for (const key in ingredient) {
    if (!standardIngredient.hasOwnProperty(key)) {
      isValid = false;
    }
  }

  return isValid;
}

module.exports = (knex, id, changes) => {
  if (!isValidIngredientPatch(changes)) {
    return new Promise((resolve, reject) => {
      reject(new Error("validIngredient(): Invalid ingredient."));
    });
  }

  return knex("ingredients")
    .where({ id: id })
    .returning("id")
    .insert(changes)
    .update(changes)
    .then(ingredientID => {
      return knex
        .select()
        .from("ingredients")
        .where({ id: parseInt(ingredientID) });
    })
    .catch(err => {
      return new Promise((resolve, reject) => {
        reject(new Error(err.message));
      });
    });
};
