import React from 'react';
import { TeamItemType } from "../redux/Slices/teamSlice";

type TeamBlockProps = {
	item: TeamItemType

}

const TeamItem: React.FC<TeamBlockProps>  = ({ item }) => {
	return (
		<div className={'team__item'} style={{ marginBottom: "80px" }}>
			<img className='team__item-img' src={`${item.img}`} alt="" />
			<p className='team__item-name' >{item.fullname}</p>
			<p className='team__item-rank' >{item.rank}</p>
			<p className='team__item-experience'>Років досвіду : <span >{item.experience}</span>  </p>
		</div>
	);
}

export default TeamItem;
