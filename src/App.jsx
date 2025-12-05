// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>

  );
}
