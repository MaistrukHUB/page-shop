import React from 'react';
import { Header, Sidebar, CallButton,Reserve } from "../components";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="wrapper">
			<Header />
				<div className="container">
					<Outlet />
				</div>
			{/* <Reserve/> */}
			<CallButton/>
		</div >
	);
}

export default MainLayout;
