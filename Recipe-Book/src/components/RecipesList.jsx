import React, { useState } from "react";
import recipes from "../assets/recipes.json";
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
      })}
    </>
  );
}
export default RecipesList;
