import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [EScount, setESCount] = useState(0);
  const [WScount, setWSCount] = useState(0);

  return (
    <div>
      <h1>Enrolled Students: {EScount}</h1>
      <button onClick={() => setESCount(EScount + 1)}>
        Add One Enrolled Student
      </button>
      <h3>Add Multiple Enrolled Students:</h3>
      <input onChange={event => setESCount(event.target.value)} />
      <h1>Waitlisted Students: {WScount}</h1>
      <button onClick={() => setWSCount(WScount + 1)}>
        Add Waitlisted Student
      </button>
      <h3>Add Multiple Enrolled Students:</h3>
      <input onChange={event => setWSCount(event.target.value)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
