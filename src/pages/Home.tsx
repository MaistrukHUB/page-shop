import React from 'react';
import { Sidebar,MapLocation,Slickes } from "../components";
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux'
import { fetchProducts, selectProducts } from "../redux/Slices/productsSlice";
import { fetchTeam } from "../redux/Slices/teamSlice";

import { FilterSliceState, selectFilters, setFilters } from "../redux/Slices/filterSlice";


const Home: React.FC = () => {
	const dispatch = useAppDispatch()
	const { selectedCategory, searchValue } = useSelector(selectFilters)

		const params = {
			selectedCategory:{
				name: 'Всі',
				categoryProperty: ""
			},
			searchValue:  ''
		}
	React.useEffect(() => {
	
		//@ts-ignore
		dispatch(setFilters({
			...params
		})
		)
		
	
	}, []);
	React.useEffect(() => {
		
		dispatch(
			fetchProducts({
				selectedCategory,
				searchValue
			}),
		)
	dispatch(fetchTeam())
	}, [params]);

	return (
		<div className='home' >
			<div className="mainPicture">
				<div className="mainPicture-text">
				<span>LABORATORY HAIR SALON </span><br />
<p>ЦЕ МІСЦЕ НАПОВНЕНЕ ТВОРЧІСТЮ ТА ПРИСТРАСТЮ ДО РЕМЕСЛА, ДЕ ЛЮДИ ЩОДНЯ СТАЮТЬ КРАЩИМИ ЧЕРЕЗ СПІЛКУВАННЯ, НАЙКРАЩИЙ СЕРВІС ТА АТМОСФЕРУ, ЯКУ ВОНИ ОТРИМУЮТЬ. </p>
				</div>
				
			</div>
			<div className="mainContent">
			<Sidebar visible='sidebarMain'/>
			<Slickes />
			<MapLocation/>
			</div>
		</div>
	);
}

export default Home;
