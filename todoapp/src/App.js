import React from 'react';
import "./App.css";
import ToDoInput from './components/toDoInput'; // Use the correct import name

function App() {
  return (
    <div className="main-container">
      <div className="center-container">
        <ToDoInput /> {/* Use the component name starting with an uppercase letter */}
      </div>
    </div>
  );
}

export default App;
