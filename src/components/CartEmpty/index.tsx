import React from 'react';
import cartEmptyImg from "../../assets/img/empty-cart.png";
import { Link } from 'react-router-dom';

const CartEmpty: React.FC = () => {
	return (
		<div className="cart cart--empty">
			<h2>Корзина пуста <span>😕</span></h2>
			<p>
				Скоріш  за все, ви не ще не додали продуктів до корзини.<br />
				Для того щоб замовити продукцію потрібно, перейди на сторінку магазину.
			</p>
			<img src={cartEmptyImg} alt="Empty cart" />
			<Link to="/shop" className="button button--black">
				<span>Перейти до покупок</span>
			</Link>
		</div>
	);
}

export default CartEmpty;
