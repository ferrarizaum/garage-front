import React, { useState } from "react";
import Navbar from "../components/NavBar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "red" }}>Login</h2>
        <form>
          <label style={{ color: "red" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label style={{ color: "red" }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
