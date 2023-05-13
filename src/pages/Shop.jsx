import React from 'react';
import { Categories, ContentItems, Search } from "../components";
import axios from "axios";
import { categories } from "../components/Categories";
import { sorts } from "../components/Sort";
import { useSelector, useDispatch } from 'react-redux'
import qs from 'qs'
import { setFilters } from "../redux/Slices/filterSlice";
import { fetchProducts } from "../redux/Slices/productsSlice";
import { useNavigate } from "react-router-dom";

const Shop = () => {
	console.log('render Shop')

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isParams = React.useRef(false)
	const isMounted = React.useRef(false)

	// const [products, setProducts] = React.useState([]);
	// const [isLoading, setIsLoading] = React.useState(true);

	const { selectedCategory, selectedSort, searchValue } = useSelector((state) => state.filtersSlice)
	const { products, status } = useSelector((state) => state.productsSlice)


	// якщо був перший ренднр перевіряємо URL-параметри і зберігаємо їх
	React.useEffect(() => {
		if (window.location.search) {
			const parseNavigate = qs.parse(window.location.search.substring(1))
			const params = {
				category: categories.find(obj => obj.categoryProperty === parseNavigate.categoryProperty),
				sort: sorts.find(obj => obj.sortProperty === parseNavigate.sortProperty),
				search: parseNavigate.searchValue
			}
			dispatch(setFilters({
				...params
			})
			)
			isParams.current = true
		}
	}, [])
	// console.log()
	//Функція яка робить запит до беку та витягує продукти
	const getProducts = async () => {
		// setIsLoading(true)
		dispatch(fetchProducts({
			selectedCategory,
			selectedSort,
			searchValue
		}))
	}


	// відповідає за те щоб при першому рендері не вшивати в силку парамерти-URL
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				categoryProperty: selectedCategory.categoryProperty,
				sortProperty: selectedSort.sortProperty,
				searchValue
			})
			navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [selectedCategory, selectedSort, searchValue])

	React.useEffect(() => {
		window.scrollTo(0, 0)
		if (!isParams.current) {
			getProducts()
		}
		isParams.current = false
	}, [selectedCategory, selectedSort, searchValue]);

	return (
		<div className="page__shop">

			<div className={`content__top `}>
				<Categories />
				{/* <Sort /> */}
				<Search />
			</div>
			<ContentItems products={products} status={status} />
			{/* <Sidebar visible={'visible-shop'} /> */}
		</div>
	);
}

export default Shop;
