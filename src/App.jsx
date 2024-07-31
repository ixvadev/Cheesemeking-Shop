import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Ingredient from "./components/Ingredient";
// import Preimu from "./pages/Preimu";
import Card from "./components/Card";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css";
import Delya from "./pages/Delya";
import Cardinfo from "./components/Cardinfo";
import Home from "./pages/Home";
// import Login from "./components/Login";
import Product_Available from './pages/Product_ Available'

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
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/available" element={<Product_Available/>}/>  
      </Routes> 
      <Footer/>    
    </>
  );
}

export default App;

