import React from 'react';


const ProductBlock = ({ itemObj }) => {
	const [productCount, setProductCount] = React.useState(0);
	const [selectedExtent, setSelectedExtent] = React.useState(0);

	const productAdd = () => {
		setProductCount(productCount + 1)
	}
	const handelExtent = (index) => {
		setSelectedExtent(index)
	}
	return (
		<div className='product-block-wrapper'>
			<div className="product-block">
				<p>{itemObj.rating}</p>
				<img
					className="product-block__image"
					src={itemObj.img[0]}
					alt="product"
				/>
				<h4 className="product-block__title">{itemObj.name}</h4>
				{itemObj && itemObj.extent
					?
					<div className="product-block__selector">
						<ul>
							{
								itemObj.extent && itemObj.extent.map((item, index) => (
									<li
										onClick={() => handelExtent(index)}
										key={item}
										className={selectedExtent === index ? 'active' : ''}>{item} гр.</li>
								))
							}

						</ul>
					</div>
					: ''
				}

				<div onClick={productAdd} className="product-block__bottom">
					<div className="product-block__price">
						{itemObj.cost[selectedExtent]} ГРН
					</div>
					<div className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Додати</span>
						<i>{productCount}</i>
					</div>
				</div>
			</div>
		</div>

	);
}

export default ProductBlock;

{/* <div className="product-block__selector">
<ul>
	{
		itemObj.extent && itemObj.extent.map((item, index) => (
			<li
				onClick={() => handelExtent(index)}
				key={item}
				className={selectedExtent === index ? 'active' : ''}>{item} гр.</li>
		))
	}

</ul>
</div> */}