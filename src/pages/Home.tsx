import React from 'react';
import { Sidebar } from "../components";

const Home: React.FC = () => {
	console.log('render home')
	return (
		<div>
			Home
			{/* <Sidebar visible={'visible-home'} /> */}
		</div>
	);
}

export default Home;
