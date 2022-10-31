import React from 'react';
import { FooterWrapper } from './elements';

const Footer = () => {
	const url = "https://screen.guru?url='" + encodeURIComponent(location.href);

	return (
		<FooterWrapper>
			Crafted by <a href="https://www.premieroctet.com/">@premieroctet</a> 😘 - Code available on{' '}
			<a href="https://github.com/premieroctet/screen-guru">GitHub</a> - <a href={url}>Bookmarklet</a>
		</FooterWrapper>
	);
};

export default Footer;
