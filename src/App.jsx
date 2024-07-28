import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <Footer/> */}
      <Hero/>
    </>
  )
}

export default App