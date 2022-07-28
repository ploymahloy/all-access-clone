import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuItem.module.css';

const useOutsideClick = (callback) => {
	const ref = useRef();

	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				callback();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, [ref]);

	return ref;
};

export default function MenuItem(props) {
	const { hasCaret, menu_title, menu_items } = props;
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive((current) => !current);
	};

	const handleClickOutside = () => {
		console.log('Clicked outside');
	};

	const ref = useOutsideClick(handleClickOutside);

	return (
		<div className={styles.dropdown}>
			<button
				className={styles.dropbtn}
				style={{ backgroundColor: isActive ? '#42aad7' : 'inherit' }}
				onClick={handleClick}
			>
				{menu_title}
				{hasCaret ? (
					<FontAwesomeIcon
						icon={faCaretDown}
						style={{ paddingLeft: '0.5rem' }}
					/>
				) : null}
			</button>
			<div
				ref={ref.current}
				className={styles.dropdown_content}
				style={{ display: isActive ? 'block' : 'none' }}
			>
				{menu_items.map((item_name, id) => {
					return (
						<a href="#" key={id}>
							{item_name}
						</a>
					);
				})}
			</div>
		</div>
	);
}
