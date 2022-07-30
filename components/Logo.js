import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<div className={styles.logo}>
			<FontAwesomeIcon icon={faFingerprint} className="fa-xl" /> All Access
		</div>
	);
}
