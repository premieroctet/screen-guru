import React from 'react';

import logo from './../../assets/logo.svg';
import guru from './../../assets/guru.svg';

const Header = ({ isLoading, isReady }) => {
  const hasNoActivity = !isLoading && !isReady;

  return (
    <header>
      {hasNoActivity && <img alt="Screen Guru" src={logo} width="300px" />}

      {isLoading && <img className="animated infinite tada" alt="Guru is working" src={guru} width="80px" />}

      {(hasNoActivity || isLoading) && <h1>screen.guru</h1>}
      {hasNoActivity && <h2>Take clean screenshot of any websites</h2>}

      {isLoading && <h2>Please wait, the Guru draws the Internet…</h2>}

      {isReady && (
        <h1>
          <span role="img" aria-label="kiss">
            😘
          </span>
        </h1>
      )}
    </header>
  );
};

export default Header;
