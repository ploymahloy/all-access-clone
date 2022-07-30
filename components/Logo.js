import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

const logo_styles = {
  padding: '16px',
  fontSize: '48px',
  lineHeight: '1',
  color: '#0f3b56'
}

export default function Logo() {
	return (
		<div style={logo_styles}>
			<FontAwesomeIcon icon={faFingerprint} className="fa-xl" /> All Access
		</div>
	);
}
