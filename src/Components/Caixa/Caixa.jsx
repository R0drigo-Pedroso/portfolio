import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Home from "../Home/Home";

const Caixa = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
          width: "100vw",
          height: "90vh",
        },
      }}
    >
      <Home elevation={3} />
    </Box>
  );
};

export default Caixa;
