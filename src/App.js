import { Router } from "@reach/router";
import React from "react";
import { Logo } from "./components/Logo/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import Home from "./pages/Home/Home";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
};

export default App;
