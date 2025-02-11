import React from "react";
import { useState } from "react";
import "../pages/RecipeDetails";
import RecipeList from "./RecipesList";
import "./RecipeList.css";
import { v4 as uuid } from "uuid";
function AddRecipe(props) {
  const [name, setName] = useState("");

  const [calories, setCalories] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipeObj = {
      //id: '_' + Math.random().toString(36).substr(2, 9), // creat id for the recipe
      name: name,
      //image: image,
      calories: calories,
      rating: rating,
      id: uuid(),
    };
    console.log(recipeObj);

    props.callbackToCreat(recipeObj);
    // clear form
    setName("");
    setRating("");
    setCalories("");
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="addRecipe">
        <label>
          <p>
            <strong> Add Recipe:</strong>
          </p>
          <input
            type="text"
            name="Recipe"
            value={name}
            required={true}
            placeholder="Add your Recipe Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          <strong> Calories :</strong>
          <input
            type="number"
            name="Calories"
            value={calories}
            placeholder="Enter Recipe's Calories"
            onChange={(event) => {
              setCalories(event.target.value);
            }}
          />
        </label>

        <label>
          <p>
            <strong>Rating:</strong>
          </p>
          <input
            type="number"
            value={rating}
            name="Rating"
            min="0"
            max="10"
            onChange={(event) => {
              setRating(event.target.value);
            }}
          />
        </label>

        <button>Add the Recipe</button>
      </form>
    </section>
  );
}
export default AddRecipe;
