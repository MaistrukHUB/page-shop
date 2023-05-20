import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { selectFiltersCategory, setCategory } from '../redux/Slices/filterSlice'

type Category = {
	name: string;
	categoryProperty: string;
}

export const categories: Category[] = [
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

	const category = useSelector(selectFiltersCategory)
	const dispatch = useDispatch()


	const onClickCategory = (item: Category) => {
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
							className={category?.name === item.name ? 'active' : ''}
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
