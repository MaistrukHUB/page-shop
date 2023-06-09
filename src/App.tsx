import React, { useState } from "react";
import './scss/app.scss'

import { Route, Routes } from "react-router-dom";


import { Shop, Cart, NotFound, Home, SelectedProduct,AboutPage } from "./pages";
import MainLayout from "./layouts/MainLayout";

import axios from "axios";



function App() {
  //@ts-ignore
  const [first, setfirst] = useState('')
  React.useEffect(() => {

    //@ts-ignore
    axios.get('http://localhost:4444/').then(({ data }) => {
      setfirst(data)

    })
  }, [])
  console.log(first)


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product/:id' element={<SelectedProduct />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes  >
    </div>
  );
}

export default App;


