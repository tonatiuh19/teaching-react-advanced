import React from "react";
import Context from "../../Context";

const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar Sesion</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
