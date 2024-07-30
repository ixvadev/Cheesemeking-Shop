import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";

import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style
import Ingredient from "./components/Ingredient";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const getCards = async () => {
    setIsloading(true);
    try {
      const { data } = await axios.get("/public/card.json");
      setCards(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  console.log(isLoading);
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Ingredient />
      {isLoading && (
        <div className="w-10 h-10 border-black rounded-full border-4 border-dotted animate-spin" />
      )}
      {cards && cards.map((item) => <Card item={item} isLoading={isLoading} />)}
      <Footer />
    </>
  );
}

export default App;
