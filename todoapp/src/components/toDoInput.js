import React, { useState } from "react";

function ToDoInput() { // Name starts with uppercase
  const [inputText, setInputText] = useState('');

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText} // Controlled input
        onChange={(e) => setInputText(e.target.value)} // Update state on input change
      />
      <button className="add-btn">+</button>
    </div>
  );
}

export default ToDoInput; // Export with uppercase name
