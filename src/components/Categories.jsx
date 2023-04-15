import React from "react";
export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const Categories = [
    "Все",
    "Мясные",
    "Вегатарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {Categories.map((value, i) => (
          <li
            onClick={() => setActiveIndex(i)}
            className={activeIndex == i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
