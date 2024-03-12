const express = require("express");
const router = express.Router();

// Import the Recipe model
const Recipe = require("../models/recipes.model");
const { getRecipe } = require("../middlewares/get-recipe");

// GET all recipes
// router.get("/", async (req, res) => {
//   try {
//     const recipes = await Recipe.getRecipes();
//     res.json(recipes);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// });

// GET one recipe
router.get("/:id", getRecipe, (req, res) => {
  res.json(res.recipe);
});

// PUT update favorite
router.put("/:id", getRecipe, async (req, res) => {
  try {
    const updatedRecipe = await Recipe.updateRecipe(req.params.id, req.body);
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// GET by ingredients
router.get("/ingredients/:ingredients", async (req, res) => {
  try {
    const recipes = await Recipe.getRecipesByIngredients(
      req.params.ingredients
    );
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// GET favorite recipes
router.get("/favorites", async (req, res) => {
  try {
    const recipes = await Recipe.getFavoriteRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
