import React, { useEffect, useState } from "react";

const CarInfo = (props) => {
  const [data, setData] = useState(null);
  const { model } = props;
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

  const correctCar = data ? data.filter((e) => e.model === model) : null;

  return data ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ marginRight: "2em", marginTop: "2em" }}>
        {correctCar.map((e) => (
          <div key={e.id}>
            <img
              style={{
                width: 500,
                height: 500,
                backgroundColor: "white",
                padding: "1em",
                borderRadius: 5,
              }}
              alt="Car"
              src={e.image}
            ></img>
            <h1 style={{ color: "red" }}>{e.model}</h1>
            <p style={{ color: "red" }}>{e.maker}</p>
            <p style={{ color: "red" }}>{e.year}</p>
            <p style={{ color: "red" }}>{`R$:${e.price}`}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    //test
    <p>Loading...</p>
  );
};

export default CarInfo;
