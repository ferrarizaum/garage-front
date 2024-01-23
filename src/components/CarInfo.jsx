import React, { useEffect, useState } from "react";

const CarInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8190/api/cars/teste");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return data ? (
    data.map((e, index) => (
      <div key={index} style={{ marginBottom: "2em" }}>
        <h1 style={{ color: "red" }}>{e.model}</h1>
        <p style={{ color: "red" }}>{e.maker}</p>
        <p style={{ color: "red" }}>{e.year}</p>
        <p style={{ color: "red" }}>{`R$:${e.price}`}</p>
        <p style={{ color: "red" }}>{e.ownerName}</p>
      </div>
    ))
  ) : (
    <p>Loading...</p>
  );
};

export default CarInfo;
