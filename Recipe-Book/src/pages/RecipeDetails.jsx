import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../assets/recipes.json";

function RecipeDetails() {
const { recipesId } = useParams();
console.log("Recipe ID from URL:", recipesId);
console.log("Recipes Data:", recipes);

  const recipeDetails = recipes.find(
    (recipe) => recipe.id === recipesId
  );

  if (!recipeDetails) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipeList">
      <div>
        <img src={recipeDetails.image} alt={recipeDetails.name} />
      </div>
      <div className="recipe-info">
        <p>
          <strong>Name :</strong> {recipeDetails.name}
        </p>
        <p>
          <strong>Calories:</strong> {recipeDetails.calories}{" "}
          {recipeDetails.calories < 350 ? "✅" : "❌"}
        </p>
        <p>
          <strong>Servings:</strong> {recipeDetails.servings}
        </p>
      </div>
    </div>
  );
}

export default RecipeDetails;
