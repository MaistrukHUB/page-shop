import React from 'react';
import { Categories, ContentItems, Search } from "../components";
import axios from "axios";
import { categories } from "../components/Categories";
import { useSelector, useDispatch } from 'react-redux'
import qs from 'qs'
import { FilterSliceState, selectFilters, setFilters } from "../redux/Slices/filterSlice";
import { fetchProducts, selectProducts } from "../redux/Slices/productsSlice";
import { useNavigate } from "react-router-dom";

const Shop: React.FC = () => {


	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isParams = React.useRef<boolean>(false)
	const isMounted = React.useRef<boolean>(false)


	const { selectedCategory, searchValue } = useSelector(selectFilters)
	const { products, status } = useSelector(selectProducts)



	// якщо був перший ренднр перевіряємо URL-параметри і зберігаємо їх
	React.useEffect(() => {
		if (window.location.search) {
			const parseNavigate = qs.parse(window.location.search.substring(1))
			const params = {
				selectedCategory: categories.find(obj => obj.categoryProperty === parseNavigate.categoryProperty) || selectedCategory,
				searchValue: parseNavigate.searchValue?.toString() || ''
			}
			console.log(parseNavigate.searchValue)
			if (searchValue !== undefined && selectedCategory !== undefined) {
				dispatch(setFilters({
					...params
				})
				)
			}

			isParams.current = true

		}
	}, [])
	//Функція яка робить запит до беку та витягує продукти
	const getProducts = async () => {
		dispatch(
			//@ts-ignore
			fetchProducts({
				selectedCategory,
				searchValue
			}))
	}


	// відповідає за те щоб при першому рендері не вшивати в силку парамерти-URL
	React.useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				categoryProperty: selectedCategory?.categoryProperty,
				searchValue
			})
			navigate(`?${queryString}`)
		}
		isMounted.current = true
	}, [selectedCategory, searchValue])

	React.useEffect(() => {
		window.scrollTo(0, 0)
		if (!isParams.current) {
			getProducts()
		}
		isParams.current = false
	}, [selectedCategory, searchValue]);

	return (
		<div className="page__shop">

			<div className={`content__top `}>
				<Categories />

				<Search />
			</div>
			<ContentItems products={products} status={status} />
		</div>
	);
}

export default Shop;
