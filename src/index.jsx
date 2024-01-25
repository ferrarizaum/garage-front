import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import OwnerPage from "./pages/OwnerPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/owner/:ownerName" element={<OwnerPage />} />
    </Routes>
  </Router>
);
