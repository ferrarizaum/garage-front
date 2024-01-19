import React from "react";

const Navbar = () => {
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
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Home
            </a>
          </li>
          <li style={{ paddingLeft: "2em" }}>
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Cars
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
