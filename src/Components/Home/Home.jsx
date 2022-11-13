import React from "react";

import estilos from "./Home.module.css";

import fotoPerfil from "../../Assets/image/imgem_3d_sentada_min.png";
import { Grid, Button } from "@mui/material";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid className={estilos.textoNome} item xs={12} sm={6}>
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
      </Grid>
      <Grid className={estilos.textoImg} item xs={12} sm={6}>
        <img src={fotoPerfil} alt="foto de perfil" />
      </Grid>
    </Grid>
  );
};

export default Home;
