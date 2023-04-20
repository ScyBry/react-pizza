import React from 'react';
export default function Categories({ categoryId, setCategoryId }) {
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const Categories = ['Все', 'Мясные', 'Вегатарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {Categories.map((value, i) => (
          <li onClick={() => setCategoryId(i)} className={categoryId === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
