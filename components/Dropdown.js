import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Dropdown.module.css';

export default function Dropdown(props) {
  const { menu_title, menu_items } = props;
  
	return (
		<div className={styles.dropdown}>
			<button className={styles.dropbtn}>
				{menu_title}
				<FontAwesomeIcon icon={faCaretDown} className="pl-2" />
			</button>
			<div className={styles.dropdown_content}>
				{menu_items.map((item_name) => {
					return <a href="#">{item_name}</a>;
				})}
			</div>
		</div>
	);
}
