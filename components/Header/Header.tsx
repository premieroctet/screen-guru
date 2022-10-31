import React from 'react';
import Image from 'next/image';

const Header = ({ isLoading, isReady }: { isLoading: boolean; isReady: boolean }) => {
  const hasNoActivity = !isLoading && !isReady;

  return (
    <header>
      {hasNoActivity && <Image src="/logo.svg" alt="Screen Guru" width={300} height={180} />}

      {isLoading && (
        <Image className="animated infinite tada" src="/guru.svg" alt="Guru is working" width={90} height={110} />
      )}

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
