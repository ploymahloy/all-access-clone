import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/reset.css';
import '../styles/globals.css';

function MyApp() {
	return (
		<>
      <DefaultLayout />
		</>
	);
}

export default MyApp;
