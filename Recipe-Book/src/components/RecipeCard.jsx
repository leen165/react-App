import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipeObj }) {
  return (
    <div className="recipeList">
      <div>
        <img src={recipeObj.image} alt={recipeObj.name} />
      </div>
      <div className="recipe-info">
        <h3>{recipeObj.name}</h3>
        <Link to={`/recipes/${recipeObj.id}`}>
          <button>See Full Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
