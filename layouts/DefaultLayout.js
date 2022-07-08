import React from 'react';

import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function DefaultLayout({ children }) {
	return (
		<div>
			<Logo />
			<Navbar />
			<main>{children}</main>
		</div>
	);
}
