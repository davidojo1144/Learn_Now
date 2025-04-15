import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Learn from "./pages/Learn"
import Login from "./pages/Login"
import Review from "./pages/Reviews"



const App = () => {
  return (
    <div className='overflex-x-hidden '>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
