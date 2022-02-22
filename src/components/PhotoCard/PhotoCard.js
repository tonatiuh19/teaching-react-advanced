import React, { Fragment, useEffect, useRef, useState } from "react";
import { ImgWrapper, Img, Button, Article } from "./styles";
import { MdFavoriteBorder } from "react-icons/md";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

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

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size="32px" /> {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
