import React from "react";
import Navbar from "../components/NavBar";
import OwnerInfo from "../components/OwnerInfo";
import { useParams } from "react-router-dom";

const OwnerPage = () => {
  const { ownerName } = useParams();
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div>
        <OwnerInfo ownerName={ownerName} />
      </div>
    </div>
  );
};

export default OwnerPage;
