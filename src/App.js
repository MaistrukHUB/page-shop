import React from "react";
import './scss/app.scss'
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'





import { Header, Sidebar } from "./components";
import { Shop, Cart, NotFound, Home } from "./pages";

function App() {

  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { selectedCategory, selectedSort, searchValue } = useSelector((state) => state.filtersSlice)

  React.useEffect(() => {
    setIsLoading(true)
    axios
      .get(`https://64493955b88a78a8f0016922.mockapi.io/products?sortBy=${selectedSort.sortProperty}.[0]&order=desc&filter=${selectedCategory.type}&search=${searchValue}`)
      .then(res => {
        setProducts(res.data)
        setIsLoading(false)
      })
  }, [selectedCategory, selectedSort, searchValue]);


  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop products={products} isLoading={isLoading} />} />
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


