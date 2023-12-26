import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import { Routes, Route } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'
import AllRoutes from './Components/Routes/AllRoutes'

function App() {
  return (
    <>
      <Navbar />

      <AllRoutes />

      {/* Routing */}

      {/* <Home />
      <Contact />
      <About /> */}

    

      

    </>
  )
}

export default App
