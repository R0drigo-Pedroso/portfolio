import React from "react";

import Container from "@mui/material/Container";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Home />
      </Container>
    </React.Fragment>
  );
};

export default App;
