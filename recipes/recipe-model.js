const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
};

//returns an array of recipes
function getRecipes() {
  return db("recipes");
}

//returns an array of ingredients needed for the recipe id passed in
function getShoppingList(id) {
  return db("ingredients as i")
    .join("recipe_ingredients as ri", "ri.ingredient_id", "i.id")
    .where({ recipe_id: id });
}
