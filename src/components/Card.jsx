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
      <div></div>
      <h1 style={{ fontSize: "4em", marginBottom: 8 }}>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Card;
