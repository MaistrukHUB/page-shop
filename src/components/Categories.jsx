import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/Slices/filterSlice'

const Categories = () => {

	const category = useSelector((state) => state.filtersSlice.selectedCategory)
	console.log(category)
	const dispatch = useDispatch()

	const categories = [
		{
			name: 'Всі',
			type: ""
		},
		{
			name: 'Для волосся',
			type: "hair"
		},
		{
			name: 'Для бороди',
			type: "beard"
		},
		{
			name: 'Для бриття',
			type: "Shave"
		},
		{
			name: 'Сертифікати/Абонименти',
			type: "sale"
		},

	]
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
