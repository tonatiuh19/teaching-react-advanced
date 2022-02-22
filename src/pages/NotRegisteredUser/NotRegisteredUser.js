import React, { Fragment, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { useRegisterMutation } from "../../containers/RegisterMutation";
import Context from "../../Context";

const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Context.Consumer>
      {({ isAuth, activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const input = { email, password };
          const variables = { input };
          setLoading(true);
          registerMutation({ variables })
            .then(() => {
              activateAuth();
              setLoading(false);
              setError(false);
            })
            .catch((e) => {
              setLoading(false);
              setError(true);
            });
        };

        return (
          <Fragment>
            <UserForm onSubmit={activateAuth} title={"Log In"} />
            <UserForm
              onSubmit={onSubmit}
              title={"Sign Up"}
              disabled={loading}
              errorMessage={"The user already exists."}
              error={error}
            />
          </Fragment>
        );
      }}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
