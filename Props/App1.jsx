import React from "react";
import product from "./product";
const title = "iphone-17";
const desc = {
  screen: 10,
  ram: "4gb",
  rom: "16gb",
  brand: "apple",
};
const price = 7500;
return(
    <>
        <product title={title} desc={desc} price={price}/>
    </>
)
export default App1;

/* 
output 
title =ggdf
screen =4gb
Rom =16  gb
Price =7500
*/
