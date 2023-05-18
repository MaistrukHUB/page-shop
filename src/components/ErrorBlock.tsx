import React from 'react';
import error from "../assets/img/error-404.png";


const ErrorBlock: React.FC = () => {
	return (
		<div className='error404'>
			<img src={error} alt="error404" />
			<p>Нажаль трапилась помилка, не вдалося отримати продукти.</p><br />
			<p>Спробуйте пізніше.</p>
		</div>
	);
}

export default ErrorBlock;
