import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuItem.module.scss';

export default function MenuItem(props) {
	const { hasCaret, menu_title, menu_items } = props;
	const [isActive, setIsActive] = useState(false);

	const handleClickOutside = () => {
		console.log('Outside click');
		setIsActive(false);
	};

	const handleClick = () => {
		setIsActive((currentVal) => !currentVal);
	};

	const useOutsideClick = (callback) => {
		const ref = useRef();

		useEffect(() => {
			const handleClick = (e) => {
				if (ref.current && !ref.current.contains(e.target)) {
					callback();
				}
			};

			document.addEventListener('click', handleClick, true);

			return () => {
				document.removeEventListener('click', handleClick, true);
			};
		}, [ref]);

		return ref;
	};

	const ref = useOutsideClick(handleClickOutside);

	return (
		<div className={styles.dropdown}>
			<button
				ref={ref}
				type="button"
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
