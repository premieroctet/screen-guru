import React from 'react';
import { useSelector } from 'react-redux';
import SizeMe from 'react-sizeme';
import Confetti from 'react-confetti';
import { ScreenWrapper, ScreenInner } from './elements';
import Footer from '../Footer';
import Header from '../Header';

const Layout = props => {
  const isLoading = useSelector(state => state.app.isLoading);
  const isReady = useSelector(state => state.app.isReady);
  const hasError = useSelector(state => state.app.hasError);

  return (
    <ScreenWrapper>
      <ScreenInner>
        <Header isLoading={isLoading} isReady={isReady} hasError={hasError} />

        {isReady && (
          <Confetti
            run={isReady}
            recycle={false}
            width={props.size.width}
            height={props.size.height}
            colors={['#e67e22']}
          />
        )}

        {props.children}
      </ScreenInner>
      <Footer />
    </ScreenWrapper>
  );
};

export default SizeMe({ monitorHeight: true })(Layout);
