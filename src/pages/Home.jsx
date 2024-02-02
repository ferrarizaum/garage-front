import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Card from "../components/Card";

const Home = () => {
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
        {shuffledData.slice(0, 4).map((e) => (
          <div style={{ padding: "4em" }} key={e.id}>
            <Card model={e.model} description={e.description} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Home;
