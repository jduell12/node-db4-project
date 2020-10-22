exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("recipe_name", 256).notNullable();
      tbl.string("author", 256).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 256).notNullable().unique();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments("id");
      tbl.float("quantity").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("recipe_instructions", (tbl) => {
      tbl.increments("id");
      tbl.integer("step_number").notNullable().unsigned();
      tbl.text("instruction").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropIfTableExists("recipe_instructions")
    .dropIfTableExists("recipe_ingredients")
    .dropIfTableExists("ingredients")
    .dropIfTableExists("recipes");
};
