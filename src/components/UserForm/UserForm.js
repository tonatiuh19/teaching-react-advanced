import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Button, Form, Input, Title } from "./styles";

const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <Input placeholder="Password" type="password" {...password} />
        <Button>{title}</Button>
      </Form>
    </Fragment>
  );
};

export default UserForm;
