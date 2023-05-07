import React from 'react';
import { Categories, Sort, ContentItems, Sidebar, Search } from "../components";



const Shop = ({ products, isLoading }) => {




	return (
		<div className="page__shop">

			<div className={`content__top `}>
				<Categories />
				{/* <Sort /> */}
				<Search />
			</div>
			<ContentItems products={products} isLoading={isLoading} />
			<Sidebar visible={'visible-shop'} />
		</div>
	);
}

export default Shop;
