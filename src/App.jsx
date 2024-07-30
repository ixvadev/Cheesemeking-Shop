import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style
import Ingredient from "./components/Ingredient";
import Preimu from "./pages/Preimu";
// import axios from "axios";
// import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);


  return (
    <>
      <Header />
      <Hero />
      <Ingredient />
      <Preimu/>
      <Footer />
    </>
  );
}

export default App;
