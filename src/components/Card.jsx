import React from "react";
import CarInfo from "./CarInfo";

const Card = (props) => {
  const { title, description } = props;
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "calc(100vh - 4em)",
        width: "25%",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ marginTop: 600 }}></div>
      <h1 style={{ fontSize: "4em", marginBottom: 8 }}>{title}</h1>
      <h2>{description}</h2>
      <CarInfo />
    </div>
  );
};

export default Card;
