import React from "react";
import { Category } from "../Category/Category";
import { Item, List } from "./styles";

export const ListOfCategories = () => {
  return (
    <List>
      {[1, 2, 3, 4, 5].map((item) => {
        return (
          <Item key={item}>
            <Category />
          </Item>
        );
      })}
    </List>
  );
};
