import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

export const Quicklinks = [
	{
		title: 'Request Access',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Social Media Native Access',
				path: '#'
			},
			{
				title: 'Add/Remove Access',
				path: '#'
			},
			{
				title: 'AWS IAM User/Role Request',
				path: '#'
			},
			{
				title: 'Bulk User Request',
				path: '#'
			},
			{
				title: 'Cloud Doctor',
				path: '#'
			},
			{
				title: 'Clone/Compare Access',
				path: '#'
			},
			{
				title: 'Delete All Access for User',
				path: '#'
			},
			{
				title: 'GID Request for RACF',
				path: '#'
			},
			{
				title: 'Local Administrator',
				path: '#'
			},
			{
				title: 'MVS UID Request for RACF',
				path: '#'
			}
		]
	},
	{
		title: 'Manage Identity',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Manage User Accounts',
				path: '#'
			},
			{
				title: 'Request Sphinx Safe',
				path: '#'
			},
			{
				title: 'Set Delegates',
				path: '#'
			},
			{
				title: 'SSH',
				path: '#'
			},
			{
				title: 'Retrieve Cyberark Credentials',
				path: '#'
			}
		]
	},
	{
		title: 'Assigned Tasks',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Access Reviews',
				path: '#'
			},
			{
				title: 'Approval Forms Notifications',
				path: '#'
			},
			{
				title: 'Policy Violations',
				path: '#'
			},
			{
				title: 'Track My Requests',
				path: '#'
			},
			{
				title: 'Sign-off Reports',
				path: '#'
			}
		]
	},
	{
		title: 'Manage Service Accounts',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Search for Service Account Owners',
				path: '#'
			},
			{
				title: 'Secrets Management',
				path: '#'
			},
			{
				title: 'Transfer Service Accounts',
				path: '#'
			}
		]
	},
	{
		title: 'Developer Tools',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Get Object XML',
				path: '#'
			},
			{
				title: 'Application Connectivity Test',
				path: '#'
			}
		]
	},
	{
		title: 'Group Management',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Application CI Update',
				path: '#'
			},
			{
				title: 'Form Wizard',
				path: '#'
			},
			{
				title: 'Manage Groups',
				path: '#'
			},
			{
				title: 'Manage Workgroups',
				path: '#'
			},
			{
				title: 'Update Owner',
				path: '#'
			},
			{
				title: 'Create Active Directory Group',
				path: '#'
			},
			{
				title: 'Modify Active Directory Group',
				path: '#'
			},
			{
				title: 'Delete Active Directory Group',
				path: '#'
			}
		]
	},
	{
		title: 'All Access Help',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Need Help?',
				path: '#'
			}
		]
	},
	{
		title: 'Role Wizard',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Create a Role',
				path: '#'
			},
			{
				title: 'Modify a Role',
				path: '#'
			},
			{
				title: 'Delete a Role',
				path: '#'
			},
			{
				title: 'Disable a Role',
				path: '#'
			},
			{
				title: 'View a Role',
				path: '#'
			}
		]
	},
	{
		title: 'Mailbox and Correspondence',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Create Shared MailBox',
				path: '#'
			},
			{
				title: 'Delegate Shared MailBox',
				path: '#'
			},
			{
				title: 'Access Distribution List',
				path: '#'
			},
			{
				title: 'Modify Shared Mailbox',
				path: '#'
			},
			{
				title: 'User MailBox',
				path: '#'
			}
		]
	},
	{
		title: 'Application Support',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Native File Upload Tool',
				path: '#'
			}
		]
	},
	{
		title: 'Services',
		path: '#',
		iconClosed: <FontAwesomeIcon icon={faCaretDown} />,
		iconOpen: <FontAwesomeIcon icon={faCaretUp} />,
		subMenu: [
			{
				title: 'Activate System ID Keys',
				path: '#'
			},
			{
				title: 'Inactivate System ID Keys',
				path: '#'
			}
		]
	}
];
