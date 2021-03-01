import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [peopleBD, setPeopleBD] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{peopleBD.length} Birthday Today</h2>
        <List people={peopleBD} />
        <button onClick={() => setPeopleBD([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
