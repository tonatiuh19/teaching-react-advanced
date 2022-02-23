import React from "react";
import { useMutation, gql } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const ToogleLikeMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] =
    useMutation(LIKE_PHOTO);

  return { mutation, mutationLoading, mutationError };
};
