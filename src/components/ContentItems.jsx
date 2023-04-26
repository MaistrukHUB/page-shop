import React from 'react';
import { ProductBlock, MyLoader } from "../components";


const ContentItems = ({ products, isLoading }) => {

	return (
		<div className="content__items">
			{isLoading
				? [...new Array(6)].map((_, index) => <MyLoader key={index} />)
				: products.map((obj) => (
					<ProductBlock key={obj.id} itemObj={obj} />
				))
			}
		</div>
	);
}

export default ContentItems;
