import React, { Fragment } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { useRegisterMutation } from "../../containers/RegisterMutation";
import Context from "../../Context";

const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();
  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          registerMutation({ variables }).then(activateAuth);
        };
        return (
          <Fragment>
            <UserForm onSubmit={activateAuth} title={"Log In"} />
            <UserForm onSubmit={onSubmit} title={"Sign Up"} />
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
