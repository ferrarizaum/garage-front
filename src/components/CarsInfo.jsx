import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarsInfo = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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
      {data.map((e, index) => (
        <div key={index} style={{ marginRight: "2em", marginTop: "2em" }}>
          <img
            style={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              padding: 1,
              borderRadius: 5,
            }}
            alt="Car"
            src={e.image}
          ></img>

          <h1
            onClick={() => navigate(`/car/${e.model}`)}
            style={{ color: "red" }}
          >
            {e.model}
          </h1>
          <p style={{ color: "red" }}>{e.maker}</p>
          <p style={{ color: "red" }}>{e.year}</p>
          <p style={{ color: "red" }}>{`R$:${e.price}`}</p>
          <p
            onClick={() => navigate(`/owner/${e.ownerName}`)}
            style={{ color: "red", cursor: "pointer" }}
          >
            {e.ownerName}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarsInfo;
