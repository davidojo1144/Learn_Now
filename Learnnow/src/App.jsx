import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Learn from "./pages/Learn"
import Login from "./pages/Login"
import Review from "./pages/Reviews"
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/learn' element={<Learn/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/review' element={<Review/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
