import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import FavButton from "../FavButton/FavButton";
import { ToogleLikeMutation } from "../../containers/ToogleLikeMutation";
import { Link } from "@reach/router";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);
  const { mutation, mutationLoading, mutationError } = ToogleLikeMutation();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

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
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
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
