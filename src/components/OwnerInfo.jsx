import React, { useEffect, useState } from "react";

const OwnerInfo = (props) => {
  const [data, setData] = useState(null);
  const { ownerName } = props;
  console.log(ownerName);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8190/api/owners/teste");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const correctOwner = data ? data.filter((e) => e.name === ownerName) : null;

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
      {correctOwner.map((e, index) => (
        <div key={index} style={{ marginRight: "2em" }}>
          <h1 style={{ color: "red" }}>{e.name}</h1>
          <p style={{ color: "red" }}>{e.cellphone}</p>
          <p style={{ color: "red" }}>{e.address}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default OwnerInfo;
