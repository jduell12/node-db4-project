const express = require("express");
const router = express.Router();

const Recipes = require("./recipe-model");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then((recipes) => {
      res.status(200).json({ data: recipes });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const recipeId = req.params.id;

  Recipes.getShoppingList(recipeId)
    .then((ingredients) => {
      if (ingredients) {
        res.status(200).json({ data: ingredients });
      } else {
        res.status(404).json({
          message: "Can't find ingredients for a recipe with that ID",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ errorMessage: "Can't retrieve ingredients from database" });
    });
});

module.exports = router;
