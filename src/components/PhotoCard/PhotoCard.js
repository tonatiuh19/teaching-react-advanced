import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";

import FavButton from "../FavButton/FavButton";
import { ToogleLikeMutation } from "../../containers/ToogleLikeMutation";
import { Link } from "@reach/router";

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const { mutation, mutationLoading, mutationError } = ToogleLikeMutation();

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setShow(true);
            observer.disconnect();
          }
        });
        observer.observe(element.current);
      });
    },
    [element]
  );

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
  };

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};
