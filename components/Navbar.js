import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

import MenuItem from './MenuItem';

const username = 'Patrick Mahloy';

const menu_items_Applications = ['Application Definition'];
const menu_items_Identities = ['Identity Warehouse'];
const menu_items_Intelligence = ['Advanced Analytics', 'Reports'];
const menu_items_MyWork = [
	'My Access Reviews',
	'Access Requests',
	'Work Items'
];
const menu_items_Notifications = [
	'Work Items',
	'Approvals',
	'Forms',
	'Violations',
	'Others'
];
const menu_items_Setup = ['Roles', 'Policies', 'Tasks', 'Groups'];
const menu_items_Settings = ['Global Settings'];
const menu_items_User = ['Preferences', 'Need Help?'];

const nav_styles = {
	display: 'flex',
	justifyContent: 'space-between',
	backgroundColor: '#0f3b56'
};

export default function Navbar() {
	return (
		<nav style={nav_styles}>
			<div>
				<MenuItem
					hasCaret={false}
					menu_title={<FontAwesomeIcon icon={faBars} />}
					menu_items={[]}
				/>
        <MenuItem
          hasCaret={false}
          menu_title="Home"
          menu_items={[]}
        />
				<MenuItem
					hasCaret={true}
					menu_title="My Work"
					menu_items={menu_items_MyWork}
				/>
				<MenuItem
					hasCaret={true}
					menu_title="Identities"
					menu_items={menu_items_Identities}
				/>
				<MenuItem
					hasCaret={true}
					menu_title="Applications"
					menu_items={menu_items_Applications}
				/>
				<MenuItem
					hasCaret={true}
					menu_title="Intelligence"
					menu_items={menu_items_Intelligence}
				/>
				<MenuItem
					hasCaret={true}
					menu_title="Setup"
					menu_items={menu_items_Setup}
				/>
			</div>
			<div>
        <MenuItem
          hasCaret={false}
          menu_title="My Assets"
          menu_items={[]}
        />
				<MenuItem
					hasCaret={true}
					menu_title={<FontAwesomeIcon icon={faGear} />}
					menu_items={menu_items_Settings}
				/>
				<MenuItem
					hasCaret={false}
					menu_title={<FontAwesomeIcon icon={faBell} />}
					menu_items={menu_items_Notifications}
				/>
				<MenuItem
					hasCaret={true}
					menu_title={username}
					menu_items={menu_items_User}
				/>
			</div>
		</nav>
	);
}
