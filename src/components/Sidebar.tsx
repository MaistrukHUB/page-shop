import React from 'react';

type SidebarProps = {
	visible: string
}
const Sidebar: React.FC<SidebarProps> = ({ visible }) => {
	return (
		<div className={`sidebar ${visible}`}>
			<ul className="price-list ">
				<p className="price-list__title">ПОСЛУГИ</p>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
				<li className="price-list__item"><p>ЧОЛОВІЧА СТРИЖКА</p><span></span>ВІД 350 ГРН</li>
			</ul>
		</div>
	);
}

export default Sidebar;
