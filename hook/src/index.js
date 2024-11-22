import React, { useState } from "react";
import ReactDOM from "react-dom/client";
/* 
function srName(){
  //const [name, setName]=useState("Kumar");
  const [name, setName] = useState("Kumar"); // React hook used correctly
  return(
    <>
      <h1>Full Name of function {name}</h1>
      <button type="button" onClick={()=> setName("raj")}Raj></button>
      <button type="button" onClick={()=> setName("raja")}Raja></button>
    </>
  );
} */


function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button"onClick={() => setColor("blue")}>Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

              