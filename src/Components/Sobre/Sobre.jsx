import React from "react";

import estilos from "./Sobre.module.css";

import fotoPerfil from "../../Assets/image/imgem_3d_sentada_min.png";
import { Grid } from "@mui/material";
import Menu from "../Menu/Menu";

const Sobre = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={3}>
        <Grid className={estilos.fotoPerfil} item xs={12} sm={12} md={12}>
          <img src={fotoPerfil} alt="foto do perfil" />
        </Grid>

        <Grid className={estilos.colorMenu} item xs={12} sm={12} md={12}>
          {/* Componetização Menu */}
          <Menu />
        </Grid>
      </Grid>

      <Grid className={estilos.centralizarTexto} item xs={6} sm={6} md={9}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor
          suscipit sapiente nam molestiae voluptates ex exercitationem minus
          neque veritatis iusto aliquam fugiat cupiditate ut cum magnam
          nesciunt, quo architecto illum obcaecati corporis. Asperiores dolores
          error explicabo est hic velit quia quae nulla consequatur,
          reprehenderit sapiente adipisci fugit! Assumenda veritatis nostrum
          illo quam facilis est dolorum quaerat a, veniam tempora non impedit
          blanditiis quisquam ipsam totam. Esse veniam et tempora quam
          blanditiis sunt porro minima voluptas, ut voluptatem placeat modi
          similique perferendis dolorum fuga dolorem hic facilis quae natus sint
          iste in assumenda magni laudantium! Beatae enim fugit quidem ea? Sed
          nobis aspernatur quas qui assumenda nesciunt possimus perspiciatis
          sint harum. Illum eaque, laudantium quae quasi hic nihil, sunt sequi
          nemo repudiandae rem veritatis aspernatur accusantium. Dignissimos
          facere rerum dolorem amet nisi necessitatibus dolor, cum asperiores
          omnis fugiat totam molestias illo soluta, aspernatur voluptates
          excepturi laborum. Enim quasi dolorum cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolor
          suscipit sapiente nam molestiae voluptates ex exercitationem minus
          neque veritatis iusto aliquam fugiat cupiditate ut cum magnam
          nesciunt, quo architecto illum obcaecati corporis. Asperiores dolores
          error explicabo est hic velit quia quae nulla consequatur,
          reprehenderit sapiente adipisci fugit! Assumenda veritatis nostrum
          illo quam facilis est dolorum quaerat a, veniam tempora non impedit
          blanditiis quisquam ipsam totam. Esse veniam et tempora quam
          blanditiis sunt porro minima voluptas, ut voluptatem placeat modi
          similique perferendis dolorum fuga dolorem hic facilis quae natus sint
          iste in assumenda magni laudantium! Beatae enim fugit quidem ea? Sed
          nobis aspernatur quas qui assumenda nesciunt possimus perspiciatis
          sint harum. Illum eaque, laudantium quae quasi hic nihil, sunt sequi
          nemo repudiandae rem veritatis aspernatur accusantium. Dignissimos
          facere rerum dolorem amet nisi necessitatibus dolor, cum asperiores
          omnis fugiat totam molestias illo soluta, aspernatur voluptates
          excepturi laborum. Enim quasi dolorum cupiditate?
        </p>
      </Grid>
    </Grid>
  );
};

export default Sobre;
