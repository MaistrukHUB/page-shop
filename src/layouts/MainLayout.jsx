import React from 'react';
import { Header, Sidebar } from "../components";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="wrapper">
			<Header />
			<div className="container">
				<div className="content">
					<Outlet />
					<Sidebar visible={'visible-shop'} />
				</div>
			</div>
		</div >
	);
}

export default MainLayout;
