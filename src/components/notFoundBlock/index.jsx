import React from 'react';
import styles from './NotFoundBlock.module.scss'


const notFoundBlock = () => {
	return (
		<div className={styles.root}>
			<span>😕</span><p>Нічого не знайдено</p>
		</div>
	);
}

export default notFoundBlock;
