import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/not-found" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
