import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";

const UserForm = ({ onSubmit, title, error, errorMessage, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  console.log(disabled);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          disabled={disabled}
        />
        <Input
          placeholder="Password"
          type="password"
          disabled={disabled}
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <span>{errorMessage}</span>}
    </Fragment>
  );
};

export default UserForm;
