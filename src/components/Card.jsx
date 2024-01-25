import React from "react";

const Card = (props) => {
  const { title, description } = props;
  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: "25%",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "4em" }}>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
};

export default Card;
