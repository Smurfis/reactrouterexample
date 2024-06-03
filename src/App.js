import React from 'react';
import Navbar from "./Navbar.js"
import HeaderComponent from './components/HeaderComponent.js'; // Correct path to HeaderComponent
//pages
import AboutReiki from "./pages/AboutReiki"
import AboutUs from "./pages/AboutUs"
import EssentialOilSprays from "./pages/EssentialOilSprays"
import Home from "./pages/Home"
import Prices from "./pages/Prices"
import Reviews from "./pages/Reviews"
import SoundBathHealing from "./pages/SoundBathHealing"
import { Route, Routes } from "react-router-dom"
//app
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/AboutReiki" element={<AboutReiki />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/EssentialOilSprays" element={<EssentialOilSprays />} />
        <Route path="/Prices" element={<Prices />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/SoundBathHealing" element={<SoundBathHealing />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
