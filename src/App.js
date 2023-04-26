import React, { useEffect } from "react";
import './scss/app.scss'
// import products from "./assets/products.json";


import { Header, Categories, Sort, ContentItems } from "./components";

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://64493955b88a78a8f0016922.mockapi.io/products')
      .then((res) => res.json())
      .then((arr) => {
        setProducts(arr)
      })
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <div className="page__shop">
              <div className="content__top">
                <Categories />
                <Sort />
              </div>
              <ContentItems products={products} />
            </div>
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


