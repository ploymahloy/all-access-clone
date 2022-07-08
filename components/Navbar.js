import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faBars,
	faBell,
	faCaretDown,
	faGear
} from '@fortawesome/free-solid-svg-icons';

const username = 'Patrick Mahloy';

export default function Navbar() {
	return (
		<div className="flex justify-between bg-blue-900 text-white py-3">
			<span className="leading-10">
				<a className="m-3 pl-2">
					<FontAwesomeIcon icon={faBars} />
				</a>
				<a className="m-3">Home</a>
				<a className="m-3">
					My Work <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="m-3">
					Identities <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="m-3">
					Applications <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="m-3">
					Intelligence <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="m-3">
					Setup <FontAwesomeIcon icon={faCaretDown} />
				</a>
			</span>
			<span className="leading-10">
				<a className="italic m-3">My Assets</a>
				<a className="m-3">
					<FontAwesomeIcon icon={faGear} />
					<FontAwesomeIcon icon={faCaretDown} className="px-1"/>
				</a>
				<a className="m-3">
					<FontAwesomeIcon icon={faBell} />
				</a>

				<a className="m-3">
					{username} <FontAwesomeIcon icon={faCaretDown} />
				</a>
			</span>
		</div>
	);
}
