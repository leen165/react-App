import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./RecipeList.css";

function AddRecipe({ callbackToCreat }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !image) {
      alert("Recipe name and image are required!");
      return;
    }

    const recipeObj = {
      id: uuid(),
      name,
      image,
      calories,
      rating,
    };

    callbackToCreat(recipeObj);

    // Clear form after submission
    setName("");
    setCalories("");
    setRating("");
    setImage("");
  };

  return (
    <section className="add-recipe-container">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <label>Recipe Name:</label>
        <input
          type="text"
          value={name}
          required
          placeholder="Enter recipe name"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Calories:</label>
        <input
          type="number"
          value={calories}
          placeholder="Enter recipe's calories"
          onChange={(e) => setCalories(e.target.value)}
        />

        <label>Rating (0-10):</label>
        <input
          type="number"
          value={rating}
          min="0"
          max="10"
          placeholder="Rate the recipe"
          onChange={(e) => setRating(e.target.value)}
        />

        <label>Image URL:</label>
        <input
          type="url"
          value={image}
          required
          placeholder="Enter image URL"
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit" className="add-recipe-btn">
          Add Recipe
        </button>
      </form>
    </section>
  );
}

export default AddRecipe;
