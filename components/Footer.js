import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				© Copyright 2020 Sailpoint Technologies - All rights reserved.
			</div>
		</div>
	);
}
