// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LostAndFound from "./pages/LostAndFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lost-found" element={<LostAndFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;