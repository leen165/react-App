import React from 'react'
import { Link } from 'react-router-dom';

function RecipeCard({recipeObj}) {

  
  return (
    <div className="recipeList" key={recipeObj.id}>
      <div>
        <img src={recipeObj.image} />
      </div>
      <div className="recipe-info">
        <Link to={`/recipes/${recipeObj.id}`}>
          <button>See Full Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard