import React, { Fragment } from "react";
import { RenderProp } from "../../containers/GetFavorites";
import { Helmet } from "react-helmet";

const Favs = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Petagram - Favoritos</title>
        <meta name="description" content="Best app" />
      </Helmet>
      <h2>Favs</h2>
      <RenderProp />
    </Fragment>
  );
};

export default Favs;
