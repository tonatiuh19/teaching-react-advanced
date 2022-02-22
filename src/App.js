import { Router } from "@reach/router";
import React from "react";
import { Logo } from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <NavBar />
    </div>
  );
};

export default App;
