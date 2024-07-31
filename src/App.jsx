import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Ingredient from "./components/Ingredient";
import Preimu from "./pages/Preimu";
import Card from "./components/Card";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css";
import Delya from "./pages/Delya";

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/card")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.card);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Ingredient />
      {/* <Preimu /> */}
      <Delya/>
      {/* <Card cards={cards} isLoading={isLoading} /> */}
      <Footer />
    </>
  );
}

export default App;

