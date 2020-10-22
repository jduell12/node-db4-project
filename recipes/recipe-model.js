const db = require("../data/db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
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

//returns an array of instructions for the recipe id passed in
function getInstructions(id) {
  return db("recipe_instructions as ri")
    .join("recipes as r", "r.id", "ri.recipe_id")
    .where({ recipe_id: id })
    .select("r.recipe_name", "ri.step_number", "ri.instruction")
    .orderBy("ri.step_number");
}
