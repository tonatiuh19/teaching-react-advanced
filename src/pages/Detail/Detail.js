import React from "react";
import { PhotoCardWithQuery } from "../../containers/PhotoCardWithQuery";

const Detail = ({ detailId }) => {
  return <PhotoCardWithQuery id={detailId} />;
};

export default Detail;
