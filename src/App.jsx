import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Home from "./Components/Home/Home";

import estilos from "./Components/Home/Home.module.css";

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" className={estilos.display}>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "90vh",
            borderRadius: 1,
          }}
        >
          <Home />
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
