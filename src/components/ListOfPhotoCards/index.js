import React from "react";
import { PhotoCard } from "../PhotoCard/PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <li key={item}>
            <PhotoCard />
          </li>
        );
      })}
    </ul>
  );
};
