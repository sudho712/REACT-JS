import React from "react";

function App() {
  // Sample list of items
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div>
      <h2>Fruits List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
