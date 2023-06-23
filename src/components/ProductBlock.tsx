import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { CartItemType, addProduct} from "../redux/Slices/cartSlice";
import { Link } from 'react-router-dom';
import { selectCartProducts } from "../redux/Slices/cartSlice";
type ProductBlockProps = {
	itemObj: {
		id: string;
		name: string;
		img: string[];
		cost: number[];
		extent: number[];
		category:string;
	}

}

const ProductBlock: React.FC<ProductBlockProps> = ({ itemObj }) => {


	const dispatch = useDispatch()
	
	
	const CartProducts = useSelector(selectCartProducts)
	const items = CartProducts.filter((obj) => obj.name === itemObj.name)
	const countItems = items.reduce((sum: any, obj: any) => {
		return obj.count + sum
	}, 0)

	const [selectedExtent, setSelectedExtent] = React.useState<number>(0);

	const productAdd = () => {
		const productByCart: CartItemType = {
			id: Date.now(),
			idBySearch:itemObj.id,
			name: itemObj.name,
			img: itemObj.img[0],
			cost: itemObj.cost[selectedExtent],
			extent: itemObj.extent[selectedExtent],
			category:itemObj.category,
			count: 0
		}
		dispatch(addProduct(productByCart))
	}

	const handelExtent = (index: number) => {
		setSelectedExtent(index)
	}

	return (
		<div className='product-block-wrapper'>
			<div className="product-block">
				<Link to={`/product/${itemObj.id}`}>
					<img
						className="product-block__image"
						src={itemObj.img[0]}
						alt="product"
					/>
					</Link>

				<h4 className="product-block__title">{itemObj.name}</h4>
				{itemObj.extent.length > 0
					?
					<div className="product-block__selector">
						<ul>
							{
								itemObj.extent.map((item: number, index: number) => (
									<li
										onClick={() => handelExtent(index)}
										key={item}
										className={selectedExtent === index ? 'active' : ''}>{item} {itemObj.category === "beard" || itemObj.category ===  "shave" ? "мл.":"гр."}</li>
								))
							}
						</ul>
					</div>
					: ''
				}
				<div
					onClick={productAdd}
					className="product-block__bottom">
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
						{countItems > 0 ? <i>{countItems} </i> : ''}
					</div>
				</div>
			</div>
		</div>

	);
}

export default ProductBlock;
