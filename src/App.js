import { Redirect, Router } from "@reach/router";
import React, { useContext } from "react";
import { Logo } from "./components/Logo/Logo";
import NavBar from "./components/NavBar/NavBar";
import { Context } from "./Context";
import Detail from "./pages/Detail/Detail";
import Favs from "./pages/Favs/Favs";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import NotRegisteredUser from "./pages/NotRegisteredUser/NotRegisteredUser";
import User from "./pages/User/User";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </div>
  );
};

export default App;
