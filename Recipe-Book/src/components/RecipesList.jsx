import React, { useState } from "react";
import recipes from "../assets/recipes.json";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipesList({recipesList}) {

  const [oldrecipesList, setRecipeList] = useState(recipes);
  const deleteRecipe = (recipeId) => {
    const newRecipeList = oldrecipesList.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipeList(newRecipeList);
  };
  return (
    <div className="recipe-container">
      {recipesList.map((recipeObj)=> {
        return <RecipeCard key={recipeObj.id} recipeObj={recipeObj} deleteRecipe={deleteRecipe} />;
      })}
    </div>
  );
}
export default RecipesList;
