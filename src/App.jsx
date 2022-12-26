import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import Home from "./Components/Home/Home";
import Sobre from "./Components/Sobre/Sobre";

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              my: 15,
            },
          }}
        >
          <Paper elevation={3}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/sobre">
                  <Sobre />
                </Route>
              </Switch>
            </BrowserRouter>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
