import React from "react";

import estilos from "./Home.module.css";

import Caixa from "../Caixa/Caixa";

const Home = () => {
  return (
    <Caixa>
      <h2 className={estilos.teste}>Teste</h2>
    </Caixa>
  );
};

export default Home;
