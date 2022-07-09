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
		<div className="flex justify-between py-0.5 bg-blue-900 text-white">
			<div className="leading-10">
				<a className="p-3 hover:bg-sky-500">
					<FontAwesomeIcon icon={faBars} />
				</a>
				<a className="p-3 hover:bg-sky-500">Home</a>
				<a className="p-3 hover:bg-sky-500">
					My Work <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="p-3 hover:bg-sky-500">
					Identities <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="p-3 hover:bg-sky-500">
					Applications <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="p-3 hover:bg-sky-500">
					Intelligence <FontAwesomeIcon icon={faCaretDown} />
				</a>
				<a className="p-3 hover:bg-sky-500">
					Setup <FontAwesomeIcon icon={faCaretDown} />
				</a>
			</div>
			<div className="leading-10">
				<a className="italic p-3 hover:bg-sky-500">My Assets</a>
				<a className="p-3 hover:bg-sky-500">
					<FontAwesomeIcon icon={faGear} />
					<FontAwesomeIcon icon={faCaretDown} className="px-1" />
				</a>
				<a className="p-3 hover:bg-sky-500">
					<FontAwesomeIcon icon={faBell} />
				</a>
				<a className="p-3 hover:bg-sky-500">
					{username} <FontAwesomeIcon icon={faCaretDown} />
				</a>
			</div>
		</div>
	);
}
