import React from "react";
import './scss/app.scss'

import { Header } from "./components";

function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <div className="page__shop">
              <div className="content__top">
                <div className="categories">
                  <ul>
                    <li>Для влося</li>
                    <li>Для бороди</li>
                    <li>Сертифікати / Абонименти</li>
                  </ul>
                </div>
                <div class="sort">
                  <div class="sort__label">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                    <b>Сортування по:</b>
                    <span>популярності</span>
                  </div>
                  <div class="sort__popup">
                    <ul>
                      <li class="active">популярності</li>
                      <li>ціне</li>
                      <li>алфавіту</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content__items">
                <div className="product-block">
                  <img
                    className="product-block__image"
                    src="https://u.makeup.com.ua/c/ch/chrm24pgv1nv.jpg"
                    alt="product"
                  />
                  <h4 className="product-block__title">Uppercut Deluxe Matt Pomade</h4>
                  <div className="product-block__selector">
                    <ul>
                      <li className="active">30 гр.</li>
                      <li>90 гр.</li>
                      <li>320 гр.</li>
                    </ul>
                  </div>
                  <div className="product-block__bottom">
                    <div className="product-block__price"> 395 ГРН</div>
                    <div className="button button--outline button--add">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                          fill="white"
                        />
                      </svg>
                      <span>Додати</span>
                      <i>2</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar">
            asd
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;


