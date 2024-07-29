import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Ingredient from './components/Ingredient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Ingredient/>
      <Footer/>
    </>
  )
}

export default App