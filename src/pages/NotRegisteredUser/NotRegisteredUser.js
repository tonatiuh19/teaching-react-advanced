import React, { Fragment, useContext, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { useLoginMutation } from "../../containers/LoginMutation";
import { useRegisterMutation } from "../../containers/RegisterMutation";
import { Context } from "../../Context";

const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation();
  const { loginMutation } = useLoginMutation();
  const [loadingSignUp, setLoadingSignUp] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState(false);

  const [loadingLogIn, setLoadingLogIn] = useState(false);
  const [errorLogIn, setErrorLogIn] = useState(false);

  const { activateAuth } = useContext(Context);

  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    setLoadingSignUp(true);
    registerMutation({ variables })
      .then(({ data }) => {
        const { signup } = data;
        activateAuth(signup);
        setLoadingSignUp(false);
        setErrorSignUp(false);
      })
      .catch((e) => {
        setLoadingSignUp(false);
        setErrorSignUp(true);
      });
  };

  const onLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    setLoadingLogIn(true);
    loginMutation({ variables })
      .then(({ data }) => {
        const { login } = data;
        activateAuth(login);
        setLoadingLogIn(false);
        setErrorLogIn(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadingLogIn(false);
        setErrorLogIn(true);
      });
  };

  return (
    <Fragment>
      <UserForm
        onSubmit={onLogin}
        title={"Log In"}
        disabled={loadingLogIn}
        errorMessage={"Invalid Credentials."}
        error={errorLogIn}
      />
      <UserForm
        onSubmit={onSubmit}
        title={"Sign Up"}
        disabled={loadingSignUp}
        errorMessage={"The user already exists."}
        error={errorSignUp}
      />
    </Fragment>
  );
};

export default NotRegisteredUser;
