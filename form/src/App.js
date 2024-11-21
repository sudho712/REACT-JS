import React from 'react';
import './App.css';


function MyForm() {
  return (
    
   <div>
    <h1>Tulas Dehradun</h1>
    <p>An Institute of Engraining and Management and Application</p>
    <form>
      <label>Enter your name:
        <input type="text" placeholder='Enter the name' />                
      </label><br />
      <label>Enter the course
      <input type="text" placeholder='Enter the course' />
      </label><br />
      <label>Enter the class
      <input type="text" placeholder='Enter the class' />
      </label>
      <label>Enter the Roll No.
      <input type="text" placeholder='Enter the roll no' />
      </label>
    </form>
   </div>
  );
}



function App() {
  return (
    <div className="App">
      <MyForm />
    </div>
  );
}

export default App;
