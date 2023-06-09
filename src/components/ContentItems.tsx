import React from 'react';
import { ProductBlock, MyLoader, ErrorBlock } from ".";
import { ProductItem } from "../redux/Slices/productsSlice";

type ContentItemsProps = {
	products: ProductItem[];
	status: string;
}
const ContentItems: React.FC<ContentItemsProps> = ({ products, status }) => {

	return (
		<>
			{status === 'error'
				?
				<ErrorBlock />
				:
				<div className="content__items">
					{status === 'loading'
						? [...new Array(9)].map((_, index) => <MyLoader key={index} />)
						: products.map((obj: ProductItem) => (
							
							<ProductBlock key={obj.id} itemObj={obj} />
						))
					}
				</div>
			}
		</>

	);
}

export default ContentItems;
