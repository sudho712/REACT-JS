import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} key={car} />
        ))}
      </ul>
    </>
  );
}


function Garage1() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage1?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} key={car} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(<Garage1 />);
