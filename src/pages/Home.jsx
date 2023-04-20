import React from 'react';
import { useEffect, useState } from 'react';

import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

export default function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState(0);
  const [order, setOrder] = useState(0);

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => <PizzaBlock key={obj.id} {...obj}></PizzaBlock>);
  const skeleton = [...new Array(6)].map((_, index) => <Skeleton key={index}></Skeleton>);

  useEffect(() => {
    setLoading(true);

    const soryBy = sortType.sortProperty.replace('-', '');
    const order = order.sortProperty.includes('-' ? 'asc' : 'desc');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue > 0 ? `&search=${searchValue}` : '';

    fetch(
      `https://641d39cc1a68dc9e46197714.mockapi.io/items${category}&sortBy=${soryBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, [categoryId, sortType, searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories categoryId={categoryId} onClick={(i) => setCategoryId(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </>
  );
}
