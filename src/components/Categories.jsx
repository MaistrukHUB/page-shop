import React from 'react';


const Categories = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const categories = [
		'Для волосся',
		'Для бороди',
		'Для бриття',
		'Сертифікати',
		'Абонименти',
	]
	const onClickCategory = (index) => {
		setActiveIndex(index)
	}
	return (
		<div className="categories">
			<ul>
				{
					categories && categories.map((item, index) => (
						<li
							onClick={() => onClickCategory(index)}
							key={`${item}+${index}`}
							className={activeIndex === index ? 'active' : ''}
						>
							{item}
						</li>
					))
				}
			</ul>
		</div>
	);
}

export default Categories;
