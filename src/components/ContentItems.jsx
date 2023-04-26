import React from 'react';
import { ProductBlock } from "../components";


const ContentItems = ({ products }) => {
	console.log(products.products)
	return (
		<div className="content__items">
			{
				products && products.map((obj) => (
					<ProductBlock itemObj={obj} />
				))
			}
		</div>
	);
}

export default ContentItems;
