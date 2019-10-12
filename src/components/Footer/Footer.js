import React from 'react';
import { FooterWrapper } from './elements';

const Footer = () => (
  <FooterWrapper>
    Crafted by <a href="https://www.premieroctet.com/">@premieroctet</a> 😘 - Code available on{' '}
    <a href="https://github.com/premieroctet/screen-guru">GitHub</a> -{' '}
    <a href="javascript:location.href='https://screen.guru?url='+encodeURIComponent(location.href)">Bookmarklet</a>
  </FooterWrapper>
);

export default Footer;
