import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';

import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css"; // Specify weight
import "@fontsource/ubuntu/400-italic.css"; // Specify weight and style
import Ingredient from './components/Ingredient';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero/>
      <Ingredient/>
      <Footer />
    </>
  );
}

export default App;
