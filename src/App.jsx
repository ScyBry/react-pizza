import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
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
    </div>
  );
}

export default App;
