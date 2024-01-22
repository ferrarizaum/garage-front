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
  return (
    <div>
      {data ? (
        data.map((e, index) => (
          <h1 key={index} style={{ color: "red" }}>
            {e.model}
          </h1>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarInfo;
