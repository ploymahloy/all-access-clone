import React from 'react';

export default function NavItem({ children }) {
	return (
		<button className="p-3 hover:bg-sky-500 hover:cursor-pointer">
			{children}
		</button>
	);
}
