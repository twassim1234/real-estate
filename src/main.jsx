import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>

    <App />
    <Footer/>
  </StrictMode>
);
