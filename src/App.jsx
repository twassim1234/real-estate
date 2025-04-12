import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Home from './components/home';
import { ToastContainer, toast } from 'react-toastify';
import Rent from './components/Rent';
import House from './components/House';
const App = () => {
  return (
    <div>
      <ToastContainer/>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Rent" element={<Rent/>} />
        <Route path="/house/:id" element={<House />} />
      
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
