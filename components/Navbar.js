import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faBell,
	faCaretDown,
	faGear
} from '@fortawesome/free-solid-svg-icons';

import NavItem from './NavItem';

const username = 'Patrick Mahloy';

export default function Navbar() {
	return (
		<div className="flex justify-between bg-blue-900 text-white">
			<div>
				<NavItem>
					<FontAwesomeIcon icon={faBars} />
				</NavItem>
				<NavItem>Home</NavItem>
				<NavItem>
					My Work <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">My Access Reviews</a>
					<a href="#">Access Requests</a>
					<a href="#">Policy Violations</a>
					<a href="#">Work Items</a>
				</div>
				<NavItem>
					Identities <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">Identity Warehouse</a>
				</div>
				<NavItem>
					Applications <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">Application Definition</a>
				</div>
				<NavItem>
					Intelligence <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">Advanced Analytics</a>
					<a href="#">Reports</a>
				</div>
				<NavItem>
					Setup <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">Roles</a>
					<a href="#">Policies</a>
					<hr />
					<a href="#">Tasks</a>
					<a href="#">Groups</a>
				</div>
			</div>
			<div>
				<NavItem>My Assets</NavItem>
				<NavItem>
					<FontAwesomeIcon icon={faGear} />
					<FontAwesomeIcon icon={faCaretDown} className="px-1" />
				</NavItem>
				<div className="hidden">
					<a href="#">Global Settings</a>
				</div>
				<NavItem>
					<FontAwesomeIcon icon={faBell} />
				</NavItem>
				<div className="hidden">
					<a href="#">Work Items</a>
					<hr />
					<a href="#">Approvals</a>
					<a href="#">Forms</a>
					<a href="#">Violations</a>
					<a href="#">Others</a>
				</div>
				<NavItem>
					{username} <FontAwesomeIcon icon={faCaretDown} />
				</NavItem>
				<div className="hidden">
					<a href="#">Preferences</a>
					<a href="#">Need Help?</a>
				</div>
			</div>
		</div>
	);
}
