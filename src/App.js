import { Router } from "@reach/router";
import React from "react";
import { Logo } from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import Context from "./Context";
import Detail from "./pages/Detail/Detail";
import Favs from "./pages/Favs/Favs";
import Home from "./pages/Home/Home";
import NotRegisteredUser from "./pages/NotRegisteredUser/NotRegisteredUser";
import User from "./pages/User/User";
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

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  );
};

export default App;
