import React from "react";
import CardSolutions from "../CardSolutions/CardSolutions.js";
import Services from "../Services/Services.js";
import Casback from "../Casback/Casback.js";
import Statistics from "../Statistics/Statistics.js";
import Product from "../Product/Product.js";

const Home = () => {
  return (
    <div>
      <Casback></Casback>
      <Services></Services>
      <CardSolutions></CardSolutions>
      <Statistics></Statistics>
      <Product></Product>
    </div>
  );
};

export default Home;
