import React, { Fragment, useContext } from "react";
import { Context } from "../../Context";

const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h2>User</h2>
      <button onClick={removeAuth}>Cerrar Sesion</button>
    </Fragment>
  );
};

export default User;
