import React from "react";
import Navbar from "../components/NavBar";
import Card from "../components/Card";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
