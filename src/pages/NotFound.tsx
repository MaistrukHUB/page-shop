import React from 'react';
import { NotFoundBlock,Sidebar } from "../components"

const NotFound: React.FC = () => {
	console.log('render NotFound')
	return (

		<div className='content'>
			<Sidebar visible={'visible-shop'} />
			<NotFoundBlock />
		</div>
	);
}

export default NotFound;
