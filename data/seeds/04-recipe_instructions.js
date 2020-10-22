exports.seed = function (knex) {
  return knex("recipe_instructions").insert([
    {
      recipe_id: 1,
      step_number: 1,
      instruction: "Gather the ingredients. Take two slices of bread out.",
    },
    {
      recipe_id: 1,
      step_number: 2,
      instruction: "Place a slice of cheese on each slice of bread.",
    },
    {
      recipe_id: 1,
      step_number: 3,
      instruction:
        "Place a slice of balogna on one side and place the other half of the sandwich with the cheese facing the balogna.",
    },
    {
      recipe_id: 1,
      step_number: 4,
      instruction:
        "Heat up a pan and once the pan is warm place the sandwich on the pan cooking until the bread has been nicely toasted and then flipping the sandwich to toast the other side",
    },
    {
      recipe_id: 1,
      step_number: 5,
      instruction: "Enjoy your delicious sandwich",
    },
  ]);
};
