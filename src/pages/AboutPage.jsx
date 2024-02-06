import React from "react";
import Navbar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "8em",
        }}
      >
        <div>
          <h1 style={{ color: "red" }}>About The Garage :</h1>
        </div>
        <div style={{ marginTop: "2em" }}>
          <h2 style={{ color: "red" }}>Under Development by José Ferrari</h2>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
