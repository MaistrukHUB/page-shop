import React from 'react';
import { ProductBlock, MyLoader, ErrorBlock } from "../components";


const ContentItems = ({ products, status }) => {

	return (
		<>
			{status === 'error'
				?
				<ErrorBlock />
				:
				<div className="content__items">
					{status === 'loading'
						? [...new Array(9)].map((_, index) => <MyLoader key={index} />)
						: products.map((obj) => (
							<ProductBlock key={obj.id} itemObj={obj} />
						))
					}
				</div>
			}
		</>

	);
}

export default ContentItems;
