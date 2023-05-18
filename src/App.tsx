import React from "react";
import './scss/app.scss'

import { Route, Routes, useNavigate } from "react-router-dom";

import { Header, Sidebar } from "./components";
import { Shop, Cart, NotFound, Home, SelectedProduct } from "./pages";
import MainLayout from "./layouts/MainLayout";


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product/:id' element={<SelectedProduct />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes  >
    </div>
  );
}

export default App;


