exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, recipe_name: "Fried Balogna Sandwich", author: "Wolf Kelly" },
  ]);
};
