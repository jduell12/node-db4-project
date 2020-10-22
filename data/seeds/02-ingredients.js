exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, name: "balogna" },
    { id: 2, name: "white bread" },
    { id: 3, name: "provolone cheese" },
  ]);
};
