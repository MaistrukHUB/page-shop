import React from "react";
import './scss/app.scss'

import { Route, Routes, useNavigate } from "react-router-dom";






import { Header, Sidebar } from "./components";
import { Shop, Cart, NotFound, Home } from "./pages";


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes  >
            <Sidebar visible={'visible-shop'} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;


