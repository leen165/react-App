import React from "react";
import recipes from "../assets/recipes.json";
import "./RecipeList.css"
function RecipesList() {
  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div className="recipeList">
            <p>{recipe.name}</p>
            <p>{recipe.calories}</p>
            <img src={recipe.image} />
            <p>{recipe.servings}</p>
          </div>
        );
      })}
    </>
  );
}
export default RecipesList;
