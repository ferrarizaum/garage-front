import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import OwnerPage from "./pages/OwnerPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import CarPage from "./pages/CarPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/car/:model" element={<CarPage />} />
      <Route path="/owner/:ownerName" element={<OwnerPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </Router>
);
