import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/400-italic.css";
import Home from "./pages/Home";
import Product_Available from './pages/Product_ Available'
import Category from "./pages/Category";

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
        <Route path="/categoriy" element={<Category/>}/>
      </Routes> 
      <Footer/>    
    </>
  );
}

export default App;

