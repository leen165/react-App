import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import RecipesList from "./components/RecipesList";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <RecipesList/>
      <Footer />
    </>
  );
}

export default App;
