import React from "react";
const product = () => {
  const obj = {
    title: "iphone-",
    price: 7500,
    ram: "3gb",
    rom: "2gb",
  };
  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",
            background: "grey",
            padding: "10px",
            margin: "10px",
          }}
        >
            <h1>title={obj.title}</h1>
            <h1>title={obj.price}</h1>
            <h1>title={obj.ram}</h1>
            <h1>title={obj.rom}</h1>
        </div>
      </div>
    </>
  );
};

export default product;
