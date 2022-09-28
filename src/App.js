import React from "react";
import "./style.css";

export default function App() {

  const [state, setState] = React.useState("Ankur");
  return (
    <div>
      <h1>Click Event on State</h1>
      <h2>{state}</h2>
      <button onClick={() => setState("Srivastav")}>Update Data</button>
    </div>
  );
}
