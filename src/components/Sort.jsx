import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Sort() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const list = [];

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
          <span onClick={() => setOpen(!open)}>популярности</span>
        </div>
        {open && (
          <div className="sort__popup">
            <ul>
              {list.map((obj) => {
                return <li>{obj}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default Sort;
