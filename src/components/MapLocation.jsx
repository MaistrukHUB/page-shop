import React from 'react';

const MapLocation = () => {
	return (
		<div className="block__map">
			<div className="map__info">

				<div className='map__location map-item'>
					<img alt="" jstcache="1057" src="//www.gstatic.com/images/icons/material/system_gm/2x/place_gm_blue_24dp.png" className="Liguzb" jsan="7.Liguzb,0.alt,8.src" />
					<p>вулиця Келецька, 83, Вінниця, Вінницька область, 21000</p>
				</div>
				<div className='time-work map-item'>
					<img aria-label="Години" jstcache="908" src="//www.gstatic.com/images/icons/material/system_gm/2x/schedule_gm_blue_24dp.png" className="OdW2qd" jsan="7.OdW2qd,8.src,0.aria-label" />
					<p>Без вихідних з <span>10:00</span> до <span>19:00</span></p>
				</div>
				<div className="phone__map map-item">
					<img alt="" jstcache="895" src="//www.gstatic.com/images/icons/material/system_gm/2x/phone_gm_blue_24dp.png" className="Liguzb" jsan="7.Liguzb,0.alt,8.src" />
					<p>0630673222 </p>
				</div>
			</div>
			<iframe
				className='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d83421.42461340397!2d28.42859115338122!3d49.202086284678415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LHQsNGA0LHQtdGA0YjQvtC_IGNvbnRpbmVudGFs!5e0!3m2!1sru!2sua!4v1679946828896!5m2!1sru!2sua" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
			</iframe>
		</div>
	);
}

export default MapLocation;
