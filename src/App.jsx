import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import Home from "./Components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              my: 5,
              width: "100vw",
            },
          }}
        >
          <Paper elevation={3}>
            <Home />
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
