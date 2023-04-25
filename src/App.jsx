import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/filterSlice';

import './scss/app.scss';

export const SearchContext = createContext();

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path=""
                element={
                  <Home searchValue={searchValue} setSearchValue={setSearchValue}></Home>
                }></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
              <Route paat="/cart" element={<Cart></Cart>}></Route>
            </Routes>
          </div>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
