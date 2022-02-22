import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { Logo } from "./components/Logo/Logo";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={1} />
        </Fragment>
      )}
    </div>
  );
};

export default App;
