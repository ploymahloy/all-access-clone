import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

export default function Logo() {
	return (
		<div className="text-blue-900 text-5xl p-4">
			<FontAwesomeIcon icon={faFingerprint} className="fa-xl" /> All Access
		</div>
	);
}
