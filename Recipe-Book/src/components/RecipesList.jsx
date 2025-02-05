import React from "react";
import recipes from "../assets/recipes.json";

function RecipesList() {
  return
  <>
    {recipes.map((recipe) => {
      return <div>
      <p>{recipe.name}</p>;
      <p>{recipe.calories}</p>;
      <img src={recipe.image}/>;
      <p>{recipe.servings}</p>;

      </div>
    })}
  </>;
}
export default RecipesList;