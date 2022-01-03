import React from "react";
import Head from "./Head/Head";
import Clientes from "./Clientes/Clientes";
import Business from "./Business/Business";
import ML from "./ML/ML";
import PreFooter from "./PreFooter/PreFooter";

const Home = () => {
  return (
    <div>
      <Head />
      <Business />
      <ML />
      <PreFooter />
      <Clientes />
    </div>
  );
};

export default Home;  
