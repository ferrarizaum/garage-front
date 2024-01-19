import React from "react";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#333333", height: "4em" }}>
      <nav style={{ paddingTop: 20 }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          <li>
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Your Logo
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none", color: "white" }} href="/">
              Home
            </a>
          </li>
          <li>
            <a style={{ textDecoration: "none", color: "white" }} href="/about">
              About
            </a>
          </li>
          <li>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
