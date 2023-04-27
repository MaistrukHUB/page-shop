import React from "react";
import './scss/app.scss'
// import products from "./assets/products.json";
import { Route, Routes } from "react-router-dom";


import { Header, Sidebar } from "./components";
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

        </div>
      </div>
    </div >
  );
}

export default App;


