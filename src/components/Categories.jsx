import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/Slices/filterSlice'

export const categories = [
	{
		name: 'Всі',
		categoryProperty: ""
	},
	{
		name: 'Для волосся',
		categoryProperty: "hair"
	},
	{
		name: 'Для бороди',
		categoryProperty: "beard"
	},
	{
		name: 'Для бриття',
		categoryProperty: "Shave"
	},
	{
		name: 'Сертифікати/Абонименти',
		categoryProperty: "sale"
	},

]

const Categories = () => {

	const category = useSelector((state) => state.filtersSlice.selectedCategory)
	const dispatch = useDispatch()


	const onClickCategory = (item) => {
		dispatch(setCategory(item))
	}
	return (
		<div className="categories">
			<ul>
				{
					categories && categories.map((item, index) => (
						<li
							onClick={() => onClickCategory(item)}
							key={`${item}+${index}`}
							className={category.name === item.name ? 'active' : ''}
						>
							{item.name}
						</li>
					))
				}
			</ul>
		</div>
	);
}

export default Categories;
