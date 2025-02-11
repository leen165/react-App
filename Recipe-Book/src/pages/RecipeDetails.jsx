import React from "react";
import { useParams } from "react-router-dom";

function RecipeDetails({ recipe }) {
  const { recipesId } = useParams();
  //console.log("Recipe ID from URL:", recipesId);
  
  const recipeDetails = recipe.find((recipe) => recipe.id === recipesId);
  //console.log(recipeDetails);

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
