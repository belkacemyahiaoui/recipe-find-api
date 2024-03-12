const pool = require("../config/database");

const getRecipes = async () => {
  const res = await pool.query("SELECT * FROM recipes");
  return res.rows;
};

const getRecipeById = async (id) => {
  const res = await pool.query("SELECT * FROM recipes WHERE id = $1", [id]);
  return res.rows[0];
};

const getRecipesByIngredients = async (ingredients) => {
  const ingredientsArray = ingredients.split(",").map((i) => i.trim());
  const res = await pool.query(
    `SELECT *
    FROM recipes
    WHERE EXISTS (
        SELECT 1
        FROM jsonb_array_elements_text(ingredients) AS ingredient
        WHERE ingredient = ANY($1::text[])
    );`,
    [ingredientsArray]
  );

  return res.rows;
};

const updateRecipe = async (id, recipe) => {
  const { isFavorite } = recipe;
  const res = await pool.query(
    "UPDATE recipes SET favorite = $1 WHERE id = $2 RETURNING *",
    [isFavorite, id]
  );
  return res.rows[0];
};

const getFavoriteRecipes = async () => {
  const res = await pool.query("SELECT * FROM recipes WHERE favorite = true");
  return res.rows;
};

module.exports = {
  getRecipes,
  getRecipeById,
  updateRecipe,
  getRecipesByIngredients,
  getFavoriteRecipes,
};
