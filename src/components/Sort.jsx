import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const [open, setOpen] = React.useState(false);
  const list = [
    { name: 'популярности (DESC)', sortProperty: 'rating' },
    { name: 'популярности (ASC)', sortProperty: '-rating' },
    { name: 'цене (DESC)', sortProperty: 'price' },
    { name: 'цене (ASC)', sortProperty: '-price' },
    { name: 'алфавиту (DESC)', sortProperty: 'title' },
    { name: 'алфавиту (ASC)', sortProperty: '-title' },
  ];
  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div className="Sort">
      <div className="sort">
        <div className="sort__label">
          <svg
            width="10"
            hight="6"
            viewBox="0 0 10 6"
            fill="none"
            xmls="http://www.w3.org/2000/svg"></svg>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {list.map((obj) => {
                return (
                  <li
                    key={i}
                    onClick={() => onClickListItem(obj)}
                    className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                    {obj.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Sort;
