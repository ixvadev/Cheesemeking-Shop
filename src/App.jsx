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
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [count,setCount] = useState(0)
  function increment() {
    setCount(count +1)
  }
  function decrement(){
    setCount(count > 0 ? count -1 : 0)
  }
  function addToCard(item){
    setCard([...card,item])
  }

  function deleteToCart(itemToDelete){
    const index = card.findIndex(item => item === itemToDelete)
    if (index !== -1){
      setCard([
        ...card.slice(0, index),
        ...card.slice(index + 1)
      ])
    }
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/card")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCards(data.card);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <Header length={card.length}/>
      <Routes>
        <Route path="/" element={<Home addToCard={addToCard} />}/>
        <Route path="/available" element={<Product_Available count={count}  decrement={decrement} increment={increment}/>}/>  
        <Route path="/categoriy" element={<Category/>}/>
        <Route path="/khujamov-shop/cart" element={<Cart deleteToCart={deleteToCart} card={card}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes> 
      <Footer/>    
    </>
  );
}

export default App;

