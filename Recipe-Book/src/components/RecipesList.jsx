import React, { useState } from "react";
import recipes from "../assets/recipes.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";
function RecipesList() {
  const [recipesList, setRecipeList] = useState(recipes);
  const deleteRecipe = (recipeId) => {
    const newRecipeList = recipesList.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipeList(newRecipeList);
  };
  return (
    <>
      {recipesList.map((recipeObj) => {
        return  <RecipeCard recipeObj={recipeObj} deleteRecipe={deleteRecipe} />;
      })}
    </>
  );
}
export default RecipesList;
