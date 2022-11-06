import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
      <Paper />
    </Box>
  );
};

export default Caixa;
