import React from 'react';
import { ProductBlock, MyLoader } from "../components";


const ContentItems = ({ products }) => {

	return (
		<div className="content__items">
			{
				products && products.map((obj) => (
					// <ProductBlock key={obj.id} itemObj={obj} />
					<MyLoader />
				))
			}
		</div>
	);
}

export default ContentItems;
