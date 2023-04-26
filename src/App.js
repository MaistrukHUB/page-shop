import React from "react";
import './scss/app.scss'
// import products from "./assets/products.json";
import { Route, Routes } from "react-router-dom";


import { Header } from "./components";
import { Shop, Cart, NotFound } from "./pages";

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes  >
          </div>
          <div className="sidebar ">
            <ul className="price-list ">
              <p className="price-list__title">ПОСЛУГИ</p>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
              <li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;


