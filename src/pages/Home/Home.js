import React, { Fragment } from "react";
import { ListOfCategories } from "../../components/ListOfCategories";
import { ListOfPhotoCards } from "../../components/ListOfPhotoCards";
import { Helmet } from "react-helmet";

const Home = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petagram</title>
        <meta name="description" content="Best app" />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Fragment>
  );
};

export default Home;
