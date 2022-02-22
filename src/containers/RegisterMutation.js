import React from "react";
import { gql, useMutation } from "@apollo/client";
import react from "react";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
  const [registerMutation] = useMutation(REGISTER);

  return { registerMutation };
};
