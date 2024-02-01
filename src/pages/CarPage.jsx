import React from "react";
import CarInfo from "../components/CarInfo";
import Navbar from "../components/NavBar";
import { useParams } from "react-router-dom";

const CarPage = () => {
  const { model } = useParams();
  //console.log("car page", carModel);
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <CarInfo model={model} />
      </div>
    </div>
  );
};

export default CarPage;
