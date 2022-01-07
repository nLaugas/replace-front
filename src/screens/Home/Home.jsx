import React from "react";
import Head from "./Head/Head";
import Clientes from "./Clientes/Clientes";
import Business from "./Business/Business";
import ML from "./ML/ML";

const Home = () => {
  return (
    <div>
      <Head />
      <Clientes />
      <Business />
      <ML />
    </div>
  );
};

export default Home;  
