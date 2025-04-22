import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom'
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Learn from "./pages/Learn"
import Login from "./pages/Login"
import Review from "./pages/Reviews"
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait' >
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <Home/> </motion.div> } />
      <Route path="/about" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <About/> </motion.div> } />
      <Route path="/contactus" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <ContactUs/> </motion.div> } />
      <Route path="/learn" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <Learn/> </motion.div> } />
      <Route path="/login" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <Login/> </motion.div> } />
      <Route path="/review" element={ <motion.div initial={{ opacity: 0 }} animate={{ opacity: 5 }} exit={{ opacity: 5 }} transition={{ duration: 1 }}> <Review/> </motion.div> } />
      </Routes>
      <Footer/>
    </div>
    </AnimatePresence>
  )
}

export default App
