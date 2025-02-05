import React from 'react'

function RecipeCard({recipeObj, deleteRecipe}) {
  return (
    <div className="recipeList" key={recipeObj.id}>
      <div>
        <img src={recipeObj.image} />
        <button
          onClick={() => {
            deleteRecipe(recipeObj.id);
          }}
        >
          Delete
        </button>
      </div>
      <div className="recipe-info">
        <p>
          <strong>Name :</strong>
          {recipeObj.name}
        </p>
        <p>
          <strong>Calories:</strong> {recipeObj.calories}
          {recipeObj.calories < 350 ? " ✅" : " ❌"}
        </p>
        <p>
          <strong>Servings:</strong> {recipeObj.servings}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard