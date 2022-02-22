import React, { useEffect, useState } from "react";
import { Category } from "../Category/Category";
import { Item, List } from "./styles";

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window
      .fetch("https://petgram-server-tonatiuh19.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);
  return { categories, loading };
};

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategoriesData();

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <Item>
            <Category />
          </Item>
        ) : (
          categories.map((item) => {
            return (
              <Item key={item.id}>
                <Category {...item} />
              </Item>
            );
          })
        )}
      </List>
    );
  };

  return <div>{showFixed ? renderList(true) : renderList(false)}</div>;
};
