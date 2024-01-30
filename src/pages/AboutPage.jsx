import React from "react";
import Navbar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 style={{ color: "red" }}>About The Garage :</h1>
        <h2 style={{ color: "red" }}>Under Development by José Ferrari</h2>
      </div>
    </div>
  );
};

export default AboutPage;
