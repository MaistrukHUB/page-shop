import React from 'react';
import { Categories, Sort, ContentItems, Sidebar } from "../components";



const Shop = () => {
	const [products, setProducts] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);


	React.useEffect(() => {
		fetch('https://64493955b88a78a8f0016922.mockapi.io/products')
			.then((res) => res.json())
			.then((arr) => {
				setProducts(arr)
				setIsLoading(false)
			})
	}, []);
	return (
		<div className="page__shop">
			<div className={`content__top `}>
				<Categories />
				<Sort />
			</div>
			<ContentItems products={products} isLoading={isLoading} />
			<Sidebar visible={'visible-shop'} />
		</div>
	);
}

export default Shop;
