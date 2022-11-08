import React from "react";

import estilos from "./Home.module.css";
import fotoPerfil from "../../Assets/image/imgem_3d_sentada_min.png";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <main>
        <section className={estilos.textoNome}>
          <article className={estilos.boxTexto}>
            <aside>
              <h2>Olá, Me Chamo </h2>
            </aside>
            <aside>
              <h1>Rodrigo Pedroso</h1>
              <h4>Desenvolvedor Front-End</h4>
            </aside>

            <aside className={estilos.textoSobre}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              enim autem. Excepturi, similique eius, ad asperiores, atque sed et
              ullam quae cum harum doloremque perferendis.
            </aside>

            <Button className={estilos.CTA} variant="contained">
              mais sobre mim
            </Button>
          </article>
        </section>

        <section className={estilos.textoImg}>
          <img src={fotoPerfil} alt="" />
        </section>
      </main>
    </>
  );
};

export default Home;
