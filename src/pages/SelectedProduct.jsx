
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import LoaderSelectedProduct from "../components/LoaderSelectedProduct";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from "../redux/Slices/cartSlice";

import React from 'react';



const SelectedProduct = () => {
	const dispatch = useDispatch()
	const { id } = useParams();
	console.log(id)

	const [product, setProduct] = React.useState('');
	const [error, setError] = React.useState();
	const [selectedExtent, setSelectedExtent] = React.useState(0);

	const items = useSelector(state => state.cartSlice.products.filter(obj => obj.name === product.name))

	const countItems = items.reduce((sum, obj) => {
		return obj.count + sum
	}, 0)

	const handelExtent = (index) => {
		setSelectedExtent(index)
	}

	const productAdd = () => {
		const productByCart = {
			id: Date.now(),
			name: product.name,
			img: product.img[0],
			cost: product.cost[selectedExtent],
			extent: product.extent[selectedExtent]
		}
		dispatch(addProduct(productByCart))
	}

	React.useEffect(() => {
		async function fetchProduct(params) {
			try {
				const { data } = await axios.get("https://64493955b88a78a8f0016922.mockapi.io/products/" + id)
				setProduct(data)
				setError(false)
				window.scrollTo(0, 0)
			} catch (error) {
				setError(true)
			}
		}
		fetchProduct()
	}, []);

	if (error === false) {
		return (
			<div className={'pages-product'}>
				<div className="pages-product__cart">
					<img className={'pages-product__img'} src={product.img[0]} alt="product" />
					<div className={'pages-product__info'}>
						<h2 className={'pages-product__name'}>{product.name}</h2>
						<p className={'pages-product__rating'}>Рейтиг: <span>{product.rating}</span> </p>
						<p className={'pages-product__about'}>{product.about}</p>
					</div>
				</div>

				<div className={'pages-product__params'}>

					{
						product.extent.length > 0
							?
							<div className={"params__selector product-block__selector"}>
								<ul>
									{
										product.extent.map((item, index) => (
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
					<div
						onClick={productAdd}
						className="params__bottom product-block__bottom">
						<div className="params-price product-block__price">
							{product.cost[selectedExtent]} ГРН
						</div>
						<div className="params-button button button--outline button--add">
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
				</div >
			</div >
		);
	}
	else {
		return (
			<LoaderSelectedProduct />
		)
	}

}

export default SelectedProduct;


