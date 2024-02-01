import React from "react";
import CarInfo from "../components/CarsInfo";
import Navbar from "../components/NavBar";
import CarsInfo from "../components/CarsInfo";

const CarsPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <CarsInfo />
      </div>
    </div>
  );
};

export default CarsPage;
