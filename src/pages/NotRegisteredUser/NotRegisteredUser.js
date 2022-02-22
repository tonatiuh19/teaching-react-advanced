import React, { Fragment } from "react";
import UserForm from "../../components/UserForm/UserForm";
import Context from "../../Context";

const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        return (
          <Fragment>
            <UserForm onSubmit={activateAuth} title={"Log In"} />
            <UserForm onSubmit={activateAuth} title={"Sign Up"} />
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
