import React from "react";
import CarInfo from "../components/CarInfo";
import Navbar from "../components/NavBar";

const CarsPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <CarInfo />
      </div>
    </div>
  );
};

export default CarsPage;
