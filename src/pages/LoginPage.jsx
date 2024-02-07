import React, { useState } from "react";
import Navbar, { buttonStyle } from "../components/NavBar";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={{ backgroundColor: "#000000", height: "100vh" }}>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: " #333333",
            marginTop: "8em",
            borderRadius: 5,
          }}
        >
          <div style={{ padding: "1em" }}>
            <h2 style={{ color: "red", fontSize: 24 }}>Login</h2>
          </div>
          <div>
            <form>
              <div style={{ padding: "1em" }}>
                <div>
                  <label style={{ color: "red" }}>Email:</label>
                </div>
                <div>
                  <input
                    style={{ borderRadius: "5px" }}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ padding: "1em" }}>
                <div>
                  <label style={{ color: "red" }}>Password:</label>
                </div>
                <div>
                  <input
                    style={{ borderRadius: "5px" }}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ padding: "1em" }}>
                <button style={{ ...buttonStyle }} type="button">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
