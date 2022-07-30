import React, { Children } from 'react';

import Content from '../components/Content';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

export default function DefaultLayout() {
	return (
		<div>
			<Logo />
			<Navbar />
			<Content>
				Tempor consectetur ullamco ad proident aliquip adipisicing culpa ipsum
				laborum eiusmod proident fugiat. Incididunt reprehenderit quis et irure.
				Nisi adipisicing magna Lorem consequat cupidatat mollit. In amet
				consectetur voluptate cillum duis reprehenderit. Aliqua dolor commodo
				nisi labore aute in incididunt consectetur nisi aute non. Do occaecat ad
				labore aute est voluptate tempor exercitation. Deserunt labore consequat
				excepteur fugiat Lorem. Cillum magna irure adipisicing eiusmod quis in
				deserunt tempor sunt commodo laborum. Elit commodo esse occaecat sunt
				velit pariatur consequat ex fugiat. Elit reprehenderit est pariatur
				veniam aute esse exercitation quis voluptate dolore ea fugiat. Quis
				cupidatat aliquip elit in cupidatat aute laborum laboris voluptate
				tempor proident. Excepteur culpa incididunt ullamco dolor dolor commodo
				mollit qui ipsum excepteur reprehenderit irure laborum. Magna consequat
				eu elit do magna minim anim et consequat. Mollit cupidatat exercitation
				anim et laboris incididunt eiusmod esse aute. Lorem cillum laboris
				dolore ullamco dolore tempor fugiat ipsum Lorem in dolor cillum nisi
				dolore. Ipsum est nostrud cillum sunt ut ex. Velit nisi pariatur aute
				adipisicing minim dolor ad. Culpa cupidatat id labore culpa tempor
				veniam ipsum voluptate.
				<Footer />
			</Content>
		</div>
	);
}
