import React from 'react';

type SidebarProps = {
	visible: string
}
type PriceItem ={
	name:string,
	cost:string,
}


type PriceType = PriceItem[]


const price:PriceType = [
	{
		name:'ЧОЛОВІЧА СТРИЖКА',
		cost:'від 350'
	},
	{
		name:'СТРИЖКА БОРОДИ',
		cost:'від 250'
	},
	{
		name:'СТРИЖКА + БОРОДИ',
		cost:'від 650'
	},
	{
		name:'ДИТЯЧА СТРИЖКА',
		cost:'від  300'
	},
	{
		name:'СТРИЖКА ПІД 0',
		cost:'150'
	},
	{
		name:'СТРИЖКА НОЖИЦЯМИ',
		cost:'від 400'
	},
	{
		name:'КАМУФЛЮВАННЯ БОРОДИ',
		cost:'150'
	},
	{
		name:'КАМУФЛЮВАННЯ СИВИНИ',
		cost:'200'
	},
	{
		name:'КОРОЛІВСЬКЕ ГОЛІННЯ',
		cost:"200"
	},
	{
		name:'УКЛАДКА',
		cost:'100'
	},
]

const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
	



	return (
		<div className={`sidebar ${visible}`}>
			<ul className="price-list ">
				<p className="price-list__title">ПОСЛУГИ</p>
				{price &&  price.map((item:PriceItem)=>(
					<li key={item.name} className="price-list__item"><p>{item.name}</p><span></span>{item.cost}ГРН</li>
				)) }
			</ul>
		</div>
	);
}

export default Sidebar;









