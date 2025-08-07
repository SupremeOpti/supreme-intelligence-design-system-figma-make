import React from "react";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Test App
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Basic React without any imports
        </p>
      </div>
    </div>
  );
};

export default App;