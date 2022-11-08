import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import Home from "./Components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
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
          <Paper elevation={3}>
            <Home>
              <h2>Teste</h2>
            </Home>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
