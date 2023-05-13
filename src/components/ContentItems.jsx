import React from 'react';
import { ProductBlock, MyLoader } from "../components";
import error from "../assets/img/error-404.png";


const ContentItems = ({ products, status }) => {

	return (
		<>
			{status === 'error'
				?
				<div className='error404'>
					<img src={error} alt="error404" />
					<p>Нажаль трапилась помилка, не вдалося отримати продукти.</p><br />
					<p>Спробуйте пізніше.</p>
				</div>
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
