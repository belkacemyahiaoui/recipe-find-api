const Recipe = require("../models/recipes.model");

// Middleware function for get by ID
async function getRecipe(req, res, next) {
  let recipe;
  try {
    recipe = await Recipe.getRecipeById(req.params.id);
    if (recipe == null) {
      return res.status(404).json({ message: "Cannot find recipe" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.recipe = recipe;
  next();
}

module.exports = { getRecipe };
