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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<RecipesList />} />
        <Route path="/recipes/:recipesId" element={<RecipeDetails />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
