import React, { useState } from "react";
import recipes from "../assets/recipes.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipesList({ recipesList }) {
  const [oldrecipesList, setRecipeList] = useState(recipes);
  const deleteRecipe = (recipeId) => {
    const newRecipeList = oldrecipesList.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipeList(newRecipeList);
  };
  const [search, setSearch] = useState("");
  const filteredRecipes = recipesList.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <input
        className="recipe-search"
        type="text"
        placeholder="Search recipes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="recipe-container">
        {filteredRecipes.map((recipeObj) => {
          return (
            <RecipeCard
              key={recipeObj.id}
              recipeObj={recipeObj}
              deleteRecipe={deleteRecipe}
            />
          );
        })}
      </div>
    </>
  );
}
export default RecipesList;
