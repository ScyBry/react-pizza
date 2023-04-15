import React from "react";
import { useEffect, useState } from "react";

import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://641d39cc1a68dc9e46197714.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <Skeleton key={index}></Skeleton>
            ))
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj}></PizzaBlock>)}
      </div>
    </>
  );
}
