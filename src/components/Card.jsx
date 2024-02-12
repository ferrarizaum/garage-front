import React, { useEffect, useState } from "react";

const Card = () => {
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

  const getRandomNumber = () => Math.random() - 0.5;

  const shuffledData = data?.slice().sort(getRandomNumber);

  return data ? (
    <div
      style={{
        backgroundColor: "#000000",

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
        <div style={{ display: "flex" }}>
          {shuffledData.slice(0, 4).map((e) => (
            <div
              style={{
                height: "75vh",
                width: "25%",
                padding: "4em",
                margin: "1em",
                backgroundImage: `url(${e.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={e.id}
            >
              <div>
                <h1 style={{ fontSize: "4em" }}>{e.model}</h1>
              </div>
              <div style={{ marginTop: 8 }}>
                <h2>{e.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Card;
