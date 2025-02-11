import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipesList from "./components/RecipesList";
import Footer from "./components/Footer";
import RecipeDetails from "./pages/RecipeDetails";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import NotFound from "./components/NotFound";
import AddRecipe from "./components/AddRecipe";
import recipes from './assets/recipes.json';

function App() {
  const [recipe , setRecipe]= useState(recipes);

  const creatRecipe = (recipeDetails) =>{

   const newRecipeList =[RecipeDetails, ...recipe];

   setRecipe(newRecipeList);

  };
  return (
    <>
      <Navbar />
     
      <Routes>
        <Route path="/add" element={<AddRecipe callbackToCreat={creatRecipe} />} />
        <Route path="/" element={<RecipesList recipesList ={recipe} />} />
        <Route path="/recipes/:recipesId" element={<RecipeDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </>
  );
}

export default App;
