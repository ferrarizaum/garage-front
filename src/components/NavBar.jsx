import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "#333333", height: "4em" }}>
      <nav style={{ paddingTop: 22 }}>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            paddingLeft: "6em",
          }}
        >
          <li>
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li style={{ paddingLeft: "2em" }}>
            <button onClick={() => navigate("/cars")}>Cars</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
