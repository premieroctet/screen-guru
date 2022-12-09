import React from 'react';
import { useSelector } from 'react-redux';
import SizeMe from 'react-sizeme';
import Confetti from 'react-confetti';
import { ScreenWrapper, ScreenInner } from './elements';
import Footer from '../Footer';
import Header from '../Header';
import NextHeadSeo from 'next-head-seo';
import { stateType } from '../../models/app';
import { Lato } from '@next/font/google';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });
interface LayoutType {
  size: {
    width: number;
    height: number;
  };
  children: React.ReactNode;
}

const Layout = (props: LayoutType) => {
  const isLoading = useSelector((state: { app: stateType }) => state.app.isLoading);
  const isReady = useSelector((state: { app: stateType }) => state.app.isReady);
  const hasError = useSelector((state: { app: stateType }) => state.app.hasError);

  return (
    <ScreenWrapper className={lato.className}>
      <ScreenInner>
        <Header isLoading={isLoading} isReady={isReady} />

        <NextHeadSeo
          title="Screen Guru - Take clean screenshot of any websites"
          description="Take clean screenshot of any websites"
          canonical="https://screen.guru/"
          robots="index, follow"
          og={{
            title: 'Screen Guru - Take clean screenshot of any websites',
            type: 'website',
            url: 'https://screen.guru/',
            image: 'https://screen.guru/logo.png',
            siteName: 'Screen Guru - Take clean screenshot of any websites',
          }}
          twitter={{
            card: 'summary',
          }}
        />

        {isReady && (
          <Confetti
            run={isReady}
            recycle={false}
            width={props.size.width}
            height={props.size.height}
            colors={['#1050ff']}
          />
        )}

        {props.children}
      </ScreenInner>
      <Footer />
    </ScreenWrapper>
  );
};

export default SizeMe({ monitorHeight: true })(Layout);
