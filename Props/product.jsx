import React from "react";

const product = ({ title, desc, price }) => {
  return (
    <>
      <h1>title={title}</h1>
      <div>
        <p>Screen Size={desc.screen}</p>
      </div>
      <div>
        <p>Ram={desc.ram}</p>
      </div>
      <div>
        <p>Rom={desc.rom}</p>
      </div>
      <h1>price={desc.price}</h1>
    </>
  );
};
export default product;
