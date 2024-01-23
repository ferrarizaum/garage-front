import React from "react";
import CarInfo from "../components/CarInfo";
import Navbar from "../components/NavBar";

const CarsPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#000000", height: "calc(100vh - 4em)" }}>
        <CarInfo />
      </div>
    </div>
  );
};

export default CarsPage;
